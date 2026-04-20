type WelcomeEmailParams = {
    firstName: string;
    ctaUrl: string;
};

export function welcomeEmail({ firstName, ctaUrl }: WelcomeEmailParams) {
    return `
<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#102a43;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background-color:#102a43;padding:32px;text-align:center;">
                <p style="margin:0;color:#14b8a6;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">StudyFlow AI</p>
                <h1 style="margin:12px 0 0;color:#ffffff;font-size:30px;line-height:1.3;">Plan smarter. Study better.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;font-size:22px;font-weight:700;color:#102a43;">Welcome, ${firstName}!</p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#486581;">
                  Thanks for joining StudyFlow AI. We help students turn syllabi, deadlines, exams, and study goals into realistic weekly plans.
                </p>
                <p style="margin:0 0 12px;font-size:16px;line-height:1.7;color:#486581;">Here’s what you can do next:</p>
                <ul style="margin:0 0 24px;padding-left:20px;color:#334e68;font-size:15px;line-height:1.8;">
                  <li>Upload your course information and deadlines</li>
                  <li>Generate a personalized weekly study plan</li>
                  <li>Stay organized with reminders and progress insights</li>
                </ul>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                  <tr>
                    <td style="background-color:#14b8a6;border-radius:10px;">
                      <a href="${ctaUrl}" style="display:inline-block;padding:14px 24px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;">Go to StudyFlow AI</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0;font-size:14px;line-height:1.7;color:#627d98;">
                  Tip: Sign in and add your first course to start building your study plan today.
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f8fafc;padding:24px 32px;border-top:1px solid #e2e8f0;">
                <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#102a43;">StudyFlow AI</p>
                <p style="margin:0 0 4px;font-size:13px;color:#627d98;">AI-powered academic planning for students</p>
                <p style="margin:0;font-size:13px;color:#627d98;">Contact: hello@studyflowai.com</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}