'use server';

import { ContactFormData } from '@/types';

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string>>;
}

export async function submitContactAction(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  // Extract values
  const name = formData.get('name')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const company = formData.get('company')?.toString().trim() || '';
  const service = formData.get('service')?.toString().trim() || '';
  const budget = formData.get('budget')?.toString().trim() || '';
  const timeline = formData.get('timeline')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';

  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!name || name.length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!service) {
    errors.service = 'Please select a service of interest.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Please provide details about your project (at least 10 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please review the highlighted fields and try again.',
      errors
    };
  }

  // Simulate server-side processing (e.g. database save, Slack webhook notification, CRM sync)
  try {
    // Artificial latency for smooth UI feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Server log (in production this logs to Datadog/CloudWatch)
    console.log('[Server Action] New Village Coders inquiry received:', {
      name,
      email,
      company: company || 'Not specified',
      phone: phone || 'Not specified',
      service,
      budget: budget || 'Flexible',
      timeline: timeline || 'Standard',
      messageSnippet: message.substring(0, 80) + '...',
      receivedAt: new Date().toISOString()
    });

    return {
      success: true,
      message: `Thank you, ${name}! Your project inquiry has been received by our lead architect. We will review your requirements and respond within 12 hours.`
    };
  } catch (err) {
    console.error('[Server Action Error]:', err);
    return {
      success: false,
      message: 'A temporary server error occurred. Please try again or reach out directly at hello@thevillagecoders.com.'
    };
  }
}
