import nodemailer from 'nodemailer';
import dns from 'dns/promises';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'rksc.co.in@gmail.com';
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || '')
  .replace(/\s+/g, '')
  .replace(/["']/g, '');

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
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 15000
  });
}

async function sendMailWithRetry(mailOptions: nodemailer.SendMailOptions, maxRetries = 2) {
  let lastError: any;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const transporter = createMailTransporter();
      return await transporter.sendMail(mailOptions);
    } catch (err: any) {
      lastError = err;
      if (attempt < maxRetries) {
        await new Promise((res) => setTimeout(res, 1000));
      }
    }
  }
  throw lastError;
}

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com',
  'tempmail.com',
  '10minutemail.com',
  'guerrillamail.com',
  'sharklasers.com',
  'throwawaymail.com',
  'trashmail.com',
  'yopmail.com',
  'temp-mail.org',
  'dispostable.com',
  'fakeinbox.com',
  'getairmail.com',
  'burnermail.io',
  'inboxkitten.com',
  'maildrop.cc',
  'crazymailing.com'
]);

const PLACEHOLDER_FAKE_EMAILS = new Set([
  'test@test.com',
  'test@gmail.com',
  'fake@fake.com',
  'asdf@asdf.com',
  'abc@abc.com',
  'admin@admin.com',
  'no@no.com',
  'user@user.com'
]);

async function isRealEmailDomain(email: string): Promise<{ valid: boolean; reason?: string }> {
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
  } catch (err: any) {
    if (err?.code === 'ENOTFOUND' || err?.code === 'ENODATA' || err?.code === 'SERVFAIL') {
      return { valid: false, reason: `The domain "${domain}" does not exist or is not configured for email.` };
    }
  }

  return { valid: true };
}

export default async function handler(req: any, res: any) {
  // CORS Configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  const { name, organization, email, topic, message, hp_website } = body;

  // Bot Honeypot
  if (hp_website && typeof hp_website === 'string' && hp_website.trim().length > 0) {
    return res.json({ success: true, message: 'Inquiry received.' });
  }

  // Required Fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide full name, email, and message.'
    });
  }

  // Email Format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  // Domain Validation
  const domainCheck = await isRealEmailDomain(email);
  if (!domainCheck.valid) {
    return res.status(400).json({
      success: false,
      message: domainCheck.reason || 'Please provide a genuine, active professional email address.'
    });
  }

  if (!GMAIL_APP_PASSWORD) {
    return res.status(503).json({
      success: false,
      message: 'Email service is not configured.'
    });
  }

  try {
    const formattedMessage = (message || '').replace(/\n/g, '<br/>');
    const submissionTime = new Date().toLocaleString();

    // 1. Send Email to Admin (rksc.co.in@gmail.com)
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
            <tr>
              <td style="padding: 8px 0; color: #66717d; width: 140px; font-family: monospace;">Full Name:</td>
              <td style="padding: 8px 0; color: #fafaf8; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #66717d; font-family: monospace;">Organization:</td>
              <td style="padding: 8px 0; color: #fafaf8;">${organization || 'Not Specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #66717d; font-family: monospace;">Client Email:</td>
              <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #66717d; font-family: monospace;">Discussion Topic:</td>
              <td style="padding: 8px 0; color: #c9a46c; font-weight: 600;">${topic || 'Executive Dialogue'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #66717d; font-family: monospace;">Submitted At:</td>
              <td style="padding: 8px 0; color: #969ba3; font-size: 12px;">${submissionTime}</td>
            </tr>
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

    await sendMailWithRetry(adminMailOptions, 2);

    // 2. Automated Thank-You / Confirmation Email to Client
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

            <p style="font-size: 15px; color: #fafaf8; line-height: 1.6;">
              Dear ${name},
            </p>

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
    } catch (clientErr) {
      console.warn('[Vercel Nodemailer] Client auto-reply error:', clientErr);
    }

    return res.status(200).json({
      success: true,
      provider: 'nodemailer',
      message: 'Inquiry delivered successfully to admin and confirmation sent to client.'
    });
  } catch (err: any) {
    console.error('[Vercel Nodemailer] Dispatch failed:', err);
    return res.status(500).json({
      success: false,
      message: err?.message || 'Failed to dispatch email via Nodemailer.'
    });
  }
}

