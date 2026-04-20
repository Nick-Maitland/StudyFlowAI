import { NextRequest, NextResponse } from 'next/server';
import { sendUpcomingDeadlineEmail } from '@/app/utils/emailTemplates/email';

export async function GET(request: NextRequest) {
  try {
    const to = request.nextUrl.searchParams.get('to');
    const firstName = request.nextUrl.searchParams.get('firstName') || 'Nicolas';

    if (!to) {
      return NextResponse.json(
        { message: 'Missing ?to=your@email.com query parameter' },
        { status: 400 }
      );
    }

    const response = await sendUpcomingDeadlineEmail({
      to,
      firstName,
      courseName: 'INFT 42000 - Business Application of AI',
      taskTitle: 'Project Part 6: Email Templates',
      dueDate: 'April 21, 2026 at 11:59 PM',
    });

    return NextResponse.json(response, {
      status: response.error ? 500 : 200,
    });
  } catch (error) {
    console.error('Upcoming deadline test email failed:', error);
    return NextResponse.json(
      { message: 'Failed to send deadline reminder email' },
      { status: 500 }
    );
  }
}
