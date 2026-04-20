import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HelpCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | StudyFlow AI',
  description: 'Frequently asked questions about StudyFlow AI, our study plans, smart reminders, and pricing.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col bg-lightGray selection:bg-teal-200 selection:text-navy-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-indigo-500 blur-3xl rounded-full mix-blend-overlay"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-navy-800 text-teal-400 px-4 py-2 rounded-full mb-8 border border-navy-700 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
             Frequently Asked <span className="text-teal-400">Questions</span>
          </h1>
          <p className="text-xl text-teal-50 font-medium">
             Everything you need to know about how StudyFlow AI works.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 flex-1 -mt-16 relative z-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-navy-900/5 border border-gray-100 space-y-8">
              
              <FAQItem 
                 question="How does the AI generate my weekly study plan?"
                 answer="When you upload your syllabus, our AI extracts every assignment, reading, and exam date. It then cross-references this with your available study hours and uses proven spaced-repetition algorithms to allocate the right amount of time for each task, ensuring you learn efficiently without burning out."
              />

              <FAQItem 
                 question="What happens if I miss a study session or deadline?"
                 answer="Life happens! If you fall behind or miss a block, you simply mark it in the app. The AI's dynamic rescheduling engine will immediately recalculate your entire planner, shifting tasks around your remaining availability so you stay on track for the semester."
              />

              <FAQItem 
                 question="How do the smart reminders work?"
                 answer="Instead of annoying alarms, StudyFlow sends gentle, context-aware notifications. It nudges you when it's time to transition to a new subject, reminds you of approaching deadlines before it's too late, and even suggests short breaks if it detects you've scheduled a marathon session."
              />

              <FAQItem 
                 question="Is the 'Pro Student' plan worth the $5/month?"
                 answer="Absolutely. While our Free plan is great for basic syllabus organization, the Pro plan unlocks the actual AI engine—giving you dynamic rescheduling, 24/7 AI tutor access, and the workload analytics dashboard. Most students find it pays for itself by saving them over 5 hours of manual planning per week."
              />

              <FAQItem 
                 question="Can the AI Study Assistant write my papers for me?"
                 answer="No. Our AI is designed to be an academic tutor, not a shortcut. It will help you brainstorm topics, break down complex concepts from your textbook, and generate practice questions to test your knowledge, but it is strictly programmed to uphold academic integrity."
              />

           </div>

           {/* Still have questions CTA */}
           <div className="mt-16 text-center">
              <p className="text-navy-600 text-lg mb-6 font-medium">
                 Still have questions? We're here to help.
              </p>
              <Link
                 href="/contact"
                 className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 hover:bg-teal-100 font-bold py-3 px-6 rounded-xl transition-colors border border-teal-100"
              >
                 <span>Contact Support</span>
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Simple FAQ Item Component
function FAQItem({ question, answer }: { question: string, answer: string }) {
   return (
      <div className="border-b border-gray-100 pb-8 last:border-0 last:pb-0 group">
         <h3 className="text-xl font-bold text-navy-900 mb-4 pb-1 pr-8 relative cursor-default">
            {question}
            <ChevronDown className="absolute right-0 top-1 w-5 h-5 text-teal-500 transform group-hover:translate-y-1 transition-transform" />
         </h3>
         <p className="text-navy-600 leading-relaxed text-lg">
            {answer}
         </p>
      </div>
   );
}
