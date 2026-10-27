import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const targetEmail = 'villagecoders7@gmail.com';
    const emailSubject = `New Project Inquiry from ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0284c7; margin-top: 0;">New Inquiry from ${name}</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; color: #0284c7;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0; color: #0f172a;">${phone}</td>
          </tr>` : ''}
          ${service ? `
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Service:</td>
            <td style="padding: 8px 0; color: #0f172a;">${service}</td>
          </tr>` : ''}
          ${budget ? `
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Budget:</td>
            <td style="padding: 8px 0; color: #0f172a;">$${budget}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 16px; padding: 14px; background: #f8fafc; border-left: 4px solid #0284c7; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #0f172a;">Message:</h4>
          <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
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
        from: `"Village Coders API" <${smtpUser}>`,
        to: targetEmail,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml
      });
    }

    console.log('[API Route] Sent inquiry to villagecoders7@gmail.com:', {
      name,
      email,
      phone,
      service,
      budget,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent to villagecoders7@gmail.com successfully.',
        referenceId: `VC-${Date.now().toString(36).toUpperCase()}`
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[API Route Error]:', err);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
