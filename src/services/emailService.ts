export interface BookingFormData {
  name: string;
  organization: string;
  email: string;
  topic: string;
  message: string;
}

export const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'rksc.co.in@gmail.com';

export interface SendEmailResult {
  success: boolean;
  message?: string;
  provider?: 'nodemailer' | 'cpanel-smtp';
  isConfigurationMissing?: boolean;
}

/**
 * 100% Secure Server-Side Email Dispatcher:
 * - Calls /api/contact directly on the backend.
 * - Safe & secure: credentials and SMTP authentication remain entirely server-side.
 * - Sends BOTH:
 *   1. Complete consultation inquiry email to Admin (rksc.co.in@gmail.com).
 *   2. Branded "Dialogue Initiated" thank-you confirmation email to the client.
 */
export async function sendBookingEmail(data: BookingFormData): Promise<SendEmailResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json().catch(() => null);

    if (res.ok && result?.success) {
      return {
        success: true,
        provider: result.provider || 'nodemailer',
        message: result.message || 'Inquiry delivered successfully to admin and confirmation sent to client.'
      };
    }

    return {
      success: false,
      message: result?.message || 'Unable to deliver message. Please try again or contact us directly.'
    };
  } catch {
    return {
      success: false,
      message: 'Server connection error. Please try again or reach out to ' + ADMIN_EMAIL
    };
  }
}
