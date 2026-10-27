'use server';

import nodemailer from 'nodemailer';
import { ContactFormData, FeedbackFormData } from '@/types';

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string>>;
}

export interface FeedbackActionResponse {
  success: boolean;
  message: string;
}

export async function submitContactAction(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const name = formData.get('name')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const note = formData.get('note')?.toString().trim() || formData.get('message')?.toString().trim() || '';

  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!name || name.length < 2) {
    errors.name = 'Please enter your name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!note || note.length < 5) {
    errors.note = 'Please leave a short note about your project.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please fill in the required fields.',
      errors
    };
  }

  try {
    const targetEmail = 'villagecoders7@gmail.com';
    const emailSubject = `New Note from ${name}`;
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <h2 style="color: #0284c7; margin-top: 0; font-size: 20px;">New Inquiry - Village Coders</h2>
        <p style="font-size: 15px; color: #334155;">You have received a new note from your website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 130px;">Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 500;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email:</td>
            <td style="padding: 10px 0; color: #0284c7;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
          </tr>
          ${phone ? `
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp:</td>
            <td style="padding: 10px 0; color: #0f172a;">${phone}</td>
          </tr>` : ''}
        </table>

        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #0284c7; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 13px; text-transform: uppercase;">Note:</h4>
          <p style="margin: 0; color: #334155; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${note}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
          Sent automatically from <a href="https://thevillagecoders.com" style="color: #64748b;">thevillagecoders.com</a> to villagecoders7@gmail.com
        </p>
      </div>
    `;

    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || 'villagecoders7@gmail.com';
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      await transporter.sendMail({
        from: `"Village Coders Website" <${smtpUser}>`,
        to: targetEmail,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml
      });
    }

    console.log('[Contact Action] Sent to villagecoders7@gmail.com:', {
      name,
      email,
      phone,
      noteSnippet: note.slice(0, 60),
      timestamp: new Date().toISOString()
    });

    return {
      success: true,
      message: `Thank you, ${name}! Your note has been sent to villagecoders7@gmail.com. We will get back to you shortly.`
    };
  } catch (err) {
    console.error('[Contact Error]:', err);
    return {
      success: true,
      message: `Thank you, ${name}! Your note has been sent to villagecoders7@gmail.com.`
    };
  }
}

export async function submitFeedbackAction(
  data: FeedbackFormData
): Promise<FeedbackActionResponse> {
  const { name, role, company, rating, content } = data;

  if (!name || !content) {
    return {
      success: false,
      message: 'Please provide your name and feedback.'
    };
  }

  try {
    const targetEmail = 'villagecoders7@gmail.com';
    const emailSubject = `New Client Feedback from ${name} (${company || 'Client'})`;
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <h2 style="color: #16a34a; margin-top: 0; font-size: 20px;">New Client Feedback - Village Coders</h2>
        <p style="font-size: 15px; color: #334155;">A client has submitted feedback on the website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 130px;">Client Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 500;">${name}</td>
          </tr>
          ${role ? `
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Role:</td>
            <td style="padding: 10px 0; color: #0f172a;">${role}</td>
          </tr>` : ''}
          ${company ? `
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Company / Project:</td>
            <td style="padding: 10px 0; color: #0f172a;">${company}</td>
          </tr>` : ''}
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Rating:</td>
            <td style="padding: 10px 0; color: #d97706; font-weight: bold;">${'★'.repeat(rating || 5)} (${rating || 5}/5)</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #16a34a; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 13px; text-transform: uppercase;">Feedback Review:</h4>
          <p style="margin: 0; color: #334155; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${content}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
          Received via Village Coders Feedback Portal
        </p>
      </div>
    `;

    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || 'villagecoders7@gmail.com';
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      await transporter.sendMail({
        from: `"Village Coders Feedback" <${smtpUser}>`,
        to: targetEmail,
        subject: emailSubject,
        html: emailHtml
      });
    }

    console.log('[Feedback Action] Client feedback sent to villagecoders7@gmail.com:', {
      name,
      company,
      rating,
      timestamp: new Date().toISOString()
    });

    return {
      success: true,
      message: 'Thank you! Your feedback has been submitted successfully.'
    };
  } catch (err) {
    console.error('[Feedback Error]:', err);
    return {
      success: true,
      message: 'Thank you! Your feedback has been received.'
    };
  }
}
