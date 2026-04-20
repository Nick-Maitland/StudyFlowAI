import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
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
              Terms of Service
            </h1>

            <p className="text-navy-500 mb-8">
              Effective date: April 2026
            </p>

            <div className="space-y-8 text-navy-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  1. About StudyFlow AI
                </h2>
                <p>
                  StudyFlow AI is an education technology platform that helps college and university
                  students organize courses, syllabi, deadlines, exams, academic tasks, weekly study
                  plans, reminders, and productivity goals. The service is intended to support academic
                  planning and time management. It does not guarantee grades, academic outcomes, or
                  acceptance of work by any school, instructor, or institution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  2. Accounts and User Responsibilities
                </h2>
                <p>
                  Users are responsible for providing accurate account information, protecting their
                  login credentials, and using StudyFlow AI in a lawful and respectful way. Students are
                  responsible for confirming all deadlines, exam dates, course requirements, and academic
                  policies with their instructors or institutions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  3. Acceptable Use
                </h2>
                <p className="mb-3">
                  You agree not to use StudyFlow AI to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>violate academic integrity rules or submit work that is not your own;</li>
                  <li>upload content you do not have permission to use;</li>
                  <li>attempt to hack, reverse engineer, overload, or disrupt the service;</li>
                  <li>harass, harm, or impersonate another person;</li>
                  <li>store unlawful, harmful, or highly sensitive information unrelated to study planning.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  4. Academic Integrity and AI Use
                </h2>
                <p>
                  StudyFlow AI is designed to assist with planning, reminders, organization, and
                  productivity. Users remain responsible for following their school’s academic integrity
                  policies. StudyFlow AI should not be used to cheat, misrepresent work, or avoid
                  required learning activities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  5. User Content and Ownership
                </h2>
                <p>
                  You keep ownership of the course information, academic tasks, study goals, and other
                  content you enter into StudyFlow AI. By using the service, you give StudyFlow AI
                  permission to store, process, and display that content as needed to provide study
                  planning, reminders, analytics, and related features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  6. StudyFlow AI Intellectual Property
                </h2>
                <p>
                  The StudyFlow AI name, design, software, page layouts, branding, templates, and
                  platform features belong to StudyFlow AI or its licensors. You may not copy, resell,
                  or misuse the platform without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  7. Emails and Communications
                </h2>
                <p>
                  StudyFlow AI may send transactional emails such as welcome messages, account-related
                  notices, and academic reminder emails. If promotional emails are added in the future,
                  StudyFlow AI will follow applicable consent and unsubscribe requirements, including
                  Canada’s Anti-Spam Legislation where applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  8. Privacy and Analytics
                </h2>
                <p>
                  StudyFlow AI collects and uses information as described in the Privacy Policy. This
                  includes account data, academic planning data, and Google Analytics 4 usage data such
                  as page views, device information, session activity, and approximate location. By using
                  the service, you agree to the collection and use of data described in the Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  9. Legal Frameworks
                </h2>
                <p>
                  StudyFlow AI is designed for Canadian users and references the Personal Information
                  Protection and Electronic Documents Act, or PIPEDA, for privacy practices involving
                  personal information. Because the service could be accessed by students outside Canada,
                  including users in the European Union, StudyFlow AI also recognizes privacy rights
                  associated with the General Data Protection Regulation, or GDPR. If commercial emails
                  are sent to Canadian users, Canada’s Anti-Spam Legislation, or CASL, may also apply.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  10. Limitation of Liability
                </h2>
                <p>
                  StudyFlow AI is provided on an “as is” and “as available” basis. We do not guarantee
                  that the service will always be available, error-free, or accurate. StudyFlow AI is not
                  responsible for missed deadlines, incorrect course information, academic results, loss
                  of data, or indirect damages resulting from use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  11. Termination
                </h2>
                <p>
                  We may suspend or terminate access to StudyFlow AI if a user violates these Terms,
                  misuses the service, threatens system security, or uses the platform in a way that may
                  harm other users or the business. Users may stop using StudyFlow AI at any time and
                  may request account deletion by contacting us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  12. Changes to These Terms
                </h2>
                <p>
                  StudyFlow AI may update these Terms as the service changes. Updated terms will be
                  posted on this page with a revised effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  13. Contact
                </h2>
                <p>
                  Questions about these Terms can be sent to{' '}
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
