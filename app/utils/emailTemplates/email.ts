import { Resend } from 'resend';
import { welcomeEmail } from '@/app/utils/emailTemplates/welcomeEmail';
import { upcomingDeadlineEmail } from '@/app/utils/emailTemplates/upcomingDeadlineEmail';

const emailFrom = process.env.EMAIL_FROM || 'StudyFlow AI <onboarding@resend.dev>';
const appUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

function getResendClient() {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        throw new Error('RESEND_API_KEY is not set');
    }

    return new Resend(apiKey);
}

export async function sendWelcomeEmail({
    to,
    firstName,
}: {
    to: string;
    firstName: string;
}) {
    const resend = getResendClient();

    return resend.emails.send({
        from: emailFrom,
        to: [to],
        subject: `Welcome to StudyFlow AI, ${firstName}!`,
        html: welcomeEmail({
            firstName,
            ctaUrl: `${appUrl}/auth/signin`,
        }),
        text: `Welcome to StudyFlow AI, ${firstName}! Sign in here: ${appUrl}/auth/signin`,
    });
}

export async function sendUpcomingDeadlineEmail({
    to,
    firstName,
    courseName,
    taskTitle,
    dueDate,
}: {
    to: string;
    firstName: string;
    courseName: string;
    taskTitle: string;
    dueDate: string;
}) {
    const resend = getResendClient();

    return resend.emails.send({
        from: emailFrom,
        to: [to],
        subject: `Upcoming deadline: ${taskTitle}`,
        html: upcomingDeadlineEmail({
            firstName,
            courseName,
            taskTitle,
            dueDate,
            ctaUrl: `${appUrl}/auth/signin`,
        }),
        text: `Hi ${firstName}, reminder: ${taskTitle} for ${courseName} is due ${dueDate}. Sign in here: ${appUrl}/auth/signin`,
    });
}