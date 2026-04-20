import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-lightGray text-navy-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
              StudyFlow AI Legal
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-4">
              Privacy Policy
            </h1>

            <p className="text-navy-500 mb-8">
              Effective date: April 2026
            </p>

            <div className="space-y-8 text-navy-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  1. Overview
                </h2>
                <p>
                  StudyFlow AI is an AI-powered academic planning platform for college and university
                  students. This Privacy Policy explains how we collect, use, store, and protect personal
                  information when users create accounts, enter course and study-planning data, receive
                  email reminders, and use pages that include Google Analytics 4.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  2. Information We Collect
                </h2>

                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Account information
                </h3>
                <p className="mb-4">
                  When users sign up, we collect information such as first name, last name, email
                  address, password hash, account role, verification status, and account creation dates.
                </p>

                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Academic planning information
                </h3>
                <p className="mb-4">
                  StudyFlow AI may store course codes, course names, instructor names, semesters,
                  syllabus links, academic task titles, descriptions, due dates, task types, priorities,
                  task statuses, estimated study hours, study-plan goals, study-session dates, reminder
                  times, and completion status.
                </p>

                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Email and notification information
                </h3>
                <p className="mb-4">
                  StudyFlow AI may process email addresses, names, message subjects, delivery status,
                  and basic email logs through an email provider such as Resend in order to send welcome
                  emails, account-related messages, and deadline reminders.
                </p>

                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Google Analytics 4 information
                </h3>
                <p>
                  We use Google Analytics 4 to understand how visitors use the website. GA4 may collect
                  usage data such as page views, session activity, approximate location, device type,
                  browser information, traffic source, and interaction events. GA4 uses cookies and
                  similar technologies to help measure website activity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  3. How We Use Information
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>to create and manage user accounts;</li>
                  <li>to store courses, assignments, exams, deadlines, study plans, and study sessions;</li>
                  <li>to generate planning support, reminders, and productivity insights;</li>
                  <li>to send welcome emails, deadline reminders, and important account notices;</li>
                  <li>to analyze website traffic, page views, and user engagement through GA4;</li>
                  <li>to improve StudyFlow AI features, usability, reliability, and security;</li>
                  <li>to respond to support, privacy, or account requests.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  4. AI Features
                </h2>
                <p>
                  StudyFlow AI may use academic planning information, such as deadlines, course loads,
                  task priorities, and study goals, to provide planning suggestions and productivity
                  support. Users should avoid entering unnecessary sensitive personal information into
                  task descriptions, study goals, or prompts. AI-generated suggestions are informational
                  and should be reviewed by the user.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  5. Cookies and Analytics
                </h2>
                <p>
                  Google Analytics 4 uses cookies and similar technologies to help us understand how
                  visitors interact with StudyFlow AI. This may include tracking page views, session
                  duration, device information, browser information, approximate location, and events.
                  Users can manage cookies through their browser settings or use available analytics
                  opt-out tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  6. How Information Is Stored and Protected
                </h2>
                <p>
                  StudyFlow AI uses reasonable safeguards to protect personal information, including
                  password hashing, environment variables for secrets, access controls, database
                  protections, and secure deployment practices such as HTTPS when the application is
                  hosted in production. No system is completely secure, so users should also protect
                  their passwords and avoid uploading unnecessary sensitive information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  7. Sharing of Information
                </h2>
                <p>
                  StudyFlow AI does not sell personal information. We may share limited information with
                  service providers that help operate the application, such as database hosting providers,
                  authentication providers, Google Analytics, and Resend for email delivery. These
                  services are used only to operate, secure, measure, and improve StudyFlow AI.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  8. Data Retention
                </h2>
                <p>
                  We keep account and academic planning data while an account is active or as long as
                  needed to provide the service. Users may request deletion of their account and related
                  study-planning data. Some records may be retained for security, troubleshooting, legal,
                  or backup purposes for a limited period.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  9. User Rights
                </h2>
                <p>
                  Users may request access to their personal information, correction of inaccurate
                  information, deletion of their account or study data, and information about how their
                  data is used. Users in some regions may also have additional rights under privacy laws
                  such as GDPR, including rights related to access, correction, erasure, restriction,
                  portability, objection, and automated decision-making.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  10. Legal Frameworks
                </h2>
                <p>
                  StudyFlow AI references PIPEDA because the service is intended for Canadian users and
                  collects personal information such as names, emails, account records, and academic
                  planning data. StudyFlow AI also references GDPR because users from the European Union
                  could access the service. CASL may apply to electronic messages sent to Canadian users,
                  especially if promotional emails are added in the future.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  11. Children and Student Users
                </h2>
                <p>
                  StudyFlow AI is intended for college and university students, not young children. Users
                  should only provide information that is necessary for academic planning and should
                  avoid entering sensitive personal, health, financial, or government-identification
                  information into the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  12. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy as StudyFlow AI changes. Updates will be posted on
                  this page with a revised effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  13. Contact
                </h2>
                <p>
                  Privacy questions or data requests can be sent to{' '}
                  <a href="mailto:hello@studyflowai.com" className="text-teal-600 font-semibold">
                    hello@studyflowai.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
