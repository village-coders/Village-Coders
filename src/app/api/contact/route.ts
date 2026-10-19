import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message, budget, timeline, company, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
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

    console.log('[API Route] Received project inquiry:', {
      name,
      email,
      company,
      phone,
      service,
      budget,
      timeline,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Project inquiry successfully submitted.',
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
