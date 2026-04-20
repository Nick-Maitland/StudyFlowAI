type UpcomingDeadlineEmailParams = {
  firstName: string;
  courseName: string;
  taskTitle: string;
  dueDate: string;
  ctaUrl: string;
};

export function upcomingDeadlineEmail({
  firstName,
  courseName,
  taskTitle,
  dueDate,
  ctaUrl,
}: UpcomingDeadlineEmailParams) {
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
                <h1 style="margin:12px 0 0;color:#ffffff;font-size:28px;line-height:1.3;">Upcoming deadline reminder</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;font-size:20px;font-weight:700;color:#102a43;">Hi ${firstName},</p>
                <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#486581;">
                  You have an important academic task coming up. Here’s a quick reminder so you can stay ahead instead of cramming at the last minute.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;background-color:#f0fdfa;border:1px solid #ccfbf1;border-radius:12px;">
                  <tr>
                    <td style="padding:20px;">
                      <p style="margin:0 0 8px;font-size:13px;color:#0f766e;font-weight:700;text-transform:uppercase;">Task</p>
                      <p style="margin:0 0 16px;font-size:18px;font-weight:700;color:#102a43;">${taskTitle}</p>
                      <p style="margin:0 0 8px;font-size:13px;color:#0f766e;font-weight:700;text-transform:uppercase;">Course</p>
                      <p style="margin:0 0 16px;font-size:16px;color:#334e68;">${courseName}</p>
                      <p style="margin:0 0 8px;font-size:13px;color:#0f766e;font-weight:700;text-transform:uppercase;">Due date</p>
                      <p style="margin:0;font-size:16px;color:#334e68;">${dueDate}</p>
                    </td>
                  </tr>
                </table>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                  <tr>
                    <td style="background-color:#14b8a6;border-radius:10px;">
                      <a href="${ctaUrl}" style="display:inline-block;padding:14px 24px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;">Review your study plan</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0;font-size:14px;line-height:1.7;color:#627d98;">
                  StudyFlow AI sends reminders like this when a major task is approaching so students can stay on track and manage their workload.
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
