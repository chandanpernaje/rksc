import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns/promises';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'rksc.co.in@gmail.com';
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '').replace(/["']/g, '');

function createMailTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: ADMIN_EMAIL,
      pass: GMAIL_APP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 20000
  });
}

async function sendMailWithRetry(mailOptions, maxRetries = 3) {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const transporter = createMailTransporter();
      return await transporter.sendMail(mailOptions);
    } catch (err) {
      lastError = err;
      console.warn(`[Nodemailer Server] Send attempt ${attempt} failed (${err?.code || err?.message}). Retrying...`);
      if (attempt < maxRetries) {
        await new Promise((res) => setTimeout(res, 1200));
      }
    }
  }
  throw lastError;
}

app.use(cors());
app.use(express.json());

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com',
  'sharklasers.com', 'throwawaymail.com', 'trashmail.com', 'yopmail.com',
  'temp-mail.org', 'dispostable.com', 'fakeinbox.com', 'getairmail.com',
  'burnermail.io', 'inboxkitten.com', 'maildrop.cc', 'crazymailing.com'
]);

const PLACEHOLDER_FAKE_EMAILS = new Set([
  'test@test.com', 'test@gmail.com', 'fake@fake.com', 'asdf@asdf.com',
  'abc@abc.com', 'admin@admin.com', 'no@no.com', 'user@user.com'
]);

async function isRealEmailDomain(email) {
  const normalized = email.trim().toLowerCase();
  if (PLACEHOLDER_FAKE_EMAILS.has(normalized)) {
    return { valid: false, reason: 'Please enter your genuine executive email address.' };
  }
  const parts = normalized.split('@');
  if (parts.length !== 2 || !parts[1]) {
    return { valid: false, reason: 'Invalid email address format.' };
  }
  const domain = parts[1];
  if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return { valid: false, reason: 'Disposable or temporary email addresses are not permitted.' };
  }
  try {
    const mxRecords = await dns.resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      return { valid: false, reason: `The email domain "${domain}" has no mail exchange (MX) servers and cannot receive email.` };
    }
  } catch (err) {
    if (err?.code === 'ENOTFOUND' || err?.code === 'ENODATA' || err?.code === 'SERVFAIL') {
      return { valid: false, reason: `The domain "${domain}" does not exist or is not configured for email.` };
    }
    console.warn(`[DNS MX Check] Warning for domain ${domain}:`, err?.message);
  }
  return { valid: true };
}

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    adminEmail: ADMIN_EMAIL,
    isPasswordConfigured: Boolean(GMAIL_APP_PASSWORD),
    timestamp: new Date().toISOString()
  });
});

// Nodemailer SMTP test & diagnostic endpoint
app.get('/api/verify-email', async (_req, res) => {
  if (!GMAIL_APP_PASSWORD) {
    return res.status(400).json({ status: 'error', message: 'GMAIL_APP_PASSWORD is not set in .env.' });
  }
  try {
    const transporter = createMailTransporter();
    await transporter.verify();
    return res.json({ status: 'ok', message: `Nodemailer successfully authenticated with Gmail for ${ADMIN_EMAIL}!` });
  } catch (error) {
    const isBadCredentials = error?.message?.includes('535') || error?.message?.includes('BadCredentials');
    return res.status(500).json({
      status: 'error',
      message: error?.message || 'SMTP Authentication Failed',
      isBadCredentials,
      instruction: isBadCredentials
        ? 'Google rejected your credentials (535 Bad Credentials). Generate a 16-character App Password at: https://myaccount.google.com/apppasswords'
        : undefined
    });
  }
});

// Rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip || '127.0.0.1';

  const now = Date.now();
  const clientRecord = rateLimitMap.get(clientIp);
  if (clientRecord) {
    if (now < clientRecord.resetTime) {
      if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({ success: false, message: 'Too many requests. Please wait a few minutes.' });
      }
      clientRecord.count += 1;
    } else {
      rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }
  } else {
    rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
  }

  const { name, organization, email, topic, message, hp_website } = req.body || {};

  if (hp_website && typeof hp_website === 'string' && hp_website.trim().length > 0) {
    console.warn(`[Anti-Spam] Bot submission dropped via honeypot from IP: ${clientIp}`);
    return res.json({ success: true, message: 'Inquiry received.' });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide full name, email, and message.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  const domainCheck = await isRealEmailDomain(email);
  if (!domainCheck.valid) {
    return res.status(400).json({ success: false, message: domainCheck.reason || 'Please provide a genuine email address.' });
  }

  if (!GMAIL_APP_PASSWORD) {
    return res.status(503).json({ success: false, isConfigMissing: true, message: 'Email service is not configured.' });
  }

  try {
    const formattedMessage = (message || '').replace(/\n/g, '<br/>');
    const submissionTime = new Date().toLocaleString();

    const adminMailOptions = {
      from: `"RKS Advisory Desk" <${ADMIN_EMAIL}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `[Advisory Inquiry] ${topic || 'Consultation'} — ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b0d11; color: #f2f4f8; border-radius: 12px; border: 1px solid #242933; padding: 32px;">
          <div style="border-bottom: 1px solid #242933; padding-bottom: 20px; margin-bottom: 24px;">
            <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #c9a46c;">RKS CONSULTING · EXECUTIVE INQUIRY</span>
            <h2 style="font-size: 22px; margin: 8px 0 0; color: #fafaf8; font-weight: 700;">New Consultation Request</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #66717d; width: 140px; font-family: monospace;">Full Name:</td><td style="padding: 8px 0; color: #fafaf8; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #66717d; font-family: monospace;">Organization:</td><td style="padding: 8px 0; color: #fafaf8;">${organization || 'Not Specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #66717d; font-family: monospace;">Client Email:</td><td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #66717d; font-family: monospace;">Discussion Topic:</td><td style="padding: 8px 0; color: #c9a46c; font-weight: 600;">${topic || 'Executive Dialogue'}</td></tr>
            <tr><td style="padding: 8px 0; color: #66717d; font-family: monospace;">Submitted At:</td><td style="padding: 8px 0; color: #969ba3; font-size: 12px;">${submissionTime}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background-color: #141820; border-radius: 8px; border-left: 3px solid #c9a46c;">
            <div style="font-family: monospace; font-size: 11px; text-transform: uppercase; color: #c9a46c; margin-bottom: 8px;">Executive Message / Scope:</div>
            <div style="color: #fafaf8; font-size: 14px; line-height: 1.6;">${formattedMessage}</div>
          </div>
          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #242933; font-size: 12px; color: #66717d; text-align: center;">
            Direct reply will be sent to <strong>${email}</strong>.
          </div>
        </div>
      `
    };

    await sendMailWithRetry(adminMailOptions, 3);

    try {
      const clientMailOptions = {
        from: `"Sharat Kaul | RKS Consulting" <${ADMIN_EMAIL}>`,
        to: email,
        subject: `Dialogue Initiated: Consultation Inquiry Received — RKS Consulting`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b0d11; color: #f2f4f8; border-radius: 12px; border: 1px solid #242933; padding: 32px;">
            <div style="border-bottom: 1px solid #242933; padding-bottom: 20px; margin-bottom: 24px;">
              <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #c9a46c;">RKS CONSULTING · EXECUTIVE ADVISORY</span>
              <h2 style="font-size: 22px; margin: 8px 0 0; color: #fafaf8; font-weight: 700;">Dialogue Initiated</h2>
            </div>
            <p style="font-size: 15px; color: #fafaf8; line-height: 1.6;">Dear ${name},</p>
            <p style="font-size: 14px; color: #969ba3; line-height: 1.6;">
              Thank you for requesting a conversation regarding <strong>${topic || 'Advisory Engagement'}</strong>.
              Your message has been delivered directly to our executive advisory desk (<span style="color: #fafaf8; font-family: monospace;">${ADMIN_EMAIL}</span>).
            </p>
            <div style="margin: 20px 0; padding: 16px 20px; background-color: #141820; border-radius: 8px; border: 1px solid #242933;">
              <div style="font-family: monospace; font-size: 11px; color: #66717d; text-transform: uppercase; margin-bottom: 6px;">Inquiry Scope Recorded:</div>
              <div style="font-size: 13px; color: #c9a46c; font-weight: 500;">${topic || 'Executive Dialogue'}</div>
            </div>
            <p style="font-size: 14px; color: #969ba3; line-height: 1.6;">
              Our team will review your scope and follow up with you at <strong style="color: #fafaf8;">${email}</strong> shortly.
            </p>
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #242933; font-size: 12px; color: #66717d; line-height: 1.5;">
              <strong style="color: #fafaf8;">Sharat Kaul</strong><br/>
              Semiconductor Technology Leader & Advanced Packaging Strategist<br/>
              RKS Consulting<br/>
              <a href="mailto:${ADMIN_EMAIL}" style="color: #c9a46c; text-decoration: none;">${ADMIN_EMAIL}</a>
            </div>
          </div>
        `
      };
      await sendMailWithRetry(clientMailOptions, 2);
    } catch (clientMailErr) {
      console.warn('[Nodemailer Server] Client confirmation email warning:', clientMailErr);
    }

    return res.json({ success: true, provider: 'nodemailer', message: 'Inquiry delivered successfully.' });
  } catch (error) {
    console.error('[Nodemailer Server] Transporter error:', error);
    return res.status(500).json({ success: false, message: error?.message || 'Failed to send email.' });
  }
});

// Serve static frontend files
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// SPA fallback: serve index.html for all non-API routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, async () => {
  console.log(`[Backend Server] Nodemailer API listening on http://localhost:${PORT}`);
  console.log(`[Backend Server] Admin recipient: ${ADMIN_EMAIL}`);

  if (!GMAIL_APP_PASSWORD) {
    console.warn('[Nodemailer Server] Warning: GMAIL_APP_PASSWORD is not set in .env.');
  } else {
    try {
      const testTransporter = createMailTransporter();
      await testTransporter.verify();
      console.log(`[Nodemailer Server] SUCCESS: Gmail SMTP credentials verified for ${ADMIN_EMAIL}! Ready to dispatch emails.`);
    } catch (err) {
      console.error(`[Nodemailer Server] SMTP Verification Warning:`, err?.message);
    }
  }
});

