import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Info, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | StudyFlow AI',
  description: 'Choose the perfect StudyFlow AI plan for your academic journey.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-lightGray selection:bg-teal-200 selection:text-navy-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
           <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 blur-3xl rounded-full mix-blend-overlay"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
             Simple, transparent <span className="text-teal-400">pricing.</span>
          </h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto font-medium">
             Invest in your grades and your mental health. No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 flex-1 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            
            {/* Free Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy-900/5 border border-gray-100 flex flex-col h-full mt-4 md:mt-8">
              <div className="mb-8">
                 <h3 className="text-2xl font-bold text-navy-900 mb-2">Free</h3>
                 <p className="text-navy-500 text-sm font-medium mb-6">For students who need simple organization.</p>
                 <div className="flex items-baseline text-navy-900">
                    <span className="text-5xl font-extrabold tracking-tight">$0</span>
                    <span className="text-navy-500 ml-1 font-medium">/month</span>
                 </div>
              </div>
              <Link 
                href="/auth/signup"
                className="w-full block text-center bg-teal-50 text-teal-700 hover:bg-teal-100 font-bold py-3.5 px-4 rounded-xl transition-colors mb-8"
              >
                Get Started
              </Link>
              <div className="space-y-4 flex-1">
                 <PricingFeature text="Syllabus upload (1 per semester)" />
                 <PricingFeature text="Basic weekly planner" />
                 <PricingFeature text="Standard notifications" />
                 <PricingFeature text="Task checklist" disabled />
                 <PricingFeature text="AI Study Assistant" disabled />
                 <PricingFeature text="Analytics dashboard" disabled />
              </div>
            </div>

            {/* Pro Student Plan */}
            <div className="bg-navy-900 rounded-3xl p-8 shadow-2xl shadow-teal-500/20 border-2 border-teal-500 flex flex-col h-full transform md:-translate-y-4 relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-gradient-to-r from-teal-400 to-teal-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full flex items-center space-x-1 shadow-md">
                   <Sparkles className="w-3 h-3" />
                   <span>Most Popular</span>
                </span>
              </div>
              <div className="mb-8 mt-2">
                 <h3 className="text-2xl font-bold text-white mb-2">Pro Student</h3>
                 <p className="text-navy-300 text-sm font-medium mb-6">For students striving for top grades & low stress.</p>
                 <div className="flex items-baseline text-white">
                    <span className="text-5xl font-extrabold tracking-tight">$5</span>
                    <span className="text-navy-300 ml-1 font-medium">/month</span>
                 </div>
              </div>
              <Link 
                href="/auth/signup"
                className="w-full block text-center bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg font-bold py-3.5 px-4 rounded-xl transition-colors mb-8"
              >
                Start 14-Day Free Trial
              </Link>
              <div className="space-y-4 flex-1">
                 <PricingFeature text="Unlimited syllabus uploads" dark />
                 <PricingFeature text="Dynamic, AI-driven weekly planner" dark />
                 <PricingFeature text="Smart reminders & study blocking" dark />
                 <PricingFeature text="Advanced task checklist" dark />
                 <PricingFeature text="24/7 AI Study Assistant tutor" dark />
                 <PricingFeature text="Workload & progress dashboard" dark />
              </div>
            </div>

            {/* Campus Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy-900/5 border border-gray-100 flex flex-col h-full mt-4 md:mt-8">
              <div className="mb-8">
                 <h3 className="text-2xl font-bold text-navy-900 mb-2">Campus</h3>
                 <p className="text-navy-500 text-sm font-medium mb-6">For schools, tutoring centers, and student success teams.</p>
                 <div className="flex items-baseline text-navy-900">
                    <span className="text-5xl font-extrabold tracking-tight">Custom</span>
                 </div>
              </div>
              <Link 
                href="/contact"
                className="w-full block text-center bg-white border-2 border-navy-200 text-navy-700 hover:border-navy-400 hover:bg-lightGray font-bold py-3 px-4 rounded-xl transition-colors mb-8 flex items-center justify-center"
              >
                Contact Sales
              </Link>
              <div className="space-y-4 flex-1">
                 <PricingFeature text="Everything in Pro Student" />
                 <PricingFeature text="Bulk student accounts" />
                 <PricingFeature text="Admin monitoring dashboard" />
                 <PricingFeature text="Priority onboarding & support" />
                 <PricingFeature text="Custom institutional branding" />
                 <PricingFeature text="SSO integration" />
              </div>
            </div>

          </div>
          
          <div className="mt-20 text-center max-w-2xl mx-auto">
             <div className="flex items-center justify-center space-x-2 text-navy-600 mb-4">
                <Info className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-lg">Are you an educator?</span>
             </div>
             <p className="text-navy-500 mb-6">
                We offer massive discounts for professors and TAs who want to provide StudyFlow AI to their entire classroom. Reach out to learn more!
             </p>
             <Link href="/contact" className="text-teal-600 font-bold hover:underline">
                Contact us for classroom pricing &rarr;
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Subcomponent for pricing list items
function PricingFeature({ text, disabled = false, dark = false }: { text: string, disabled?: boolean, dark?: boolean }) {
   if (disabled) {
     return (
       <div className="flex items-start space-x-3 opacity-40">
         <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
           <div className="w-2.5 h-px bg-gray-400"></div>
         </div>
         <span className="text-navy-400 font-medium text-sm">{text}</span>
       </div>
     );
   }
 
   return (
     <div className="flex items-start space-x-3">
       <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${dark ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
         <Check className="w-3.5 h-3.5" strokeWidth={3} />
       </div>
       <span className={`font-medium text-sm ${dark ? 'text-navy-50' : 'text-navy-700'}`}>{text}</span>
     </div>
   );
 }
 
