import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Brain, Calendar, CheckCircle2, Clock, Sparkles, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-lightGray selection:bg-teal-200 selection:text-navy-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex-1">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-navy-400 blur-3xl rounded-full mix-blend-multiply animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full mb-8 border border-teal-100 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">The #1 AI Study Planner for Students</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-navy-900 tracking-tight mb-6">
              Plan Smarter. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-navy-600">
                Study Better.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-600 mb-4 font-medium">
              AI-powered study planning for busy students.
            </p>
            
            <p className="text-lg text-navy-500 mb-10 max-w-2xl mx-auto">
              AI helps students organize deadlines, build personalized weekly study plans, receive reminders, and reduce academic stress. Give your grades a boost without burning out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/auth/signup"
                className="w-full sm:w-auto px-8 py-4 bg-teal-500 text-white rounded-xl text-lg font-semibold hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white text-navy-700 border-2 border-gray-200 rounded-xl text-lg font-semibold hover:border-teal-500 hover:text-teal-600 transition-colors"
              >
                See Features
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-4 text-sm text-navy-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex justify-center items-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Joined by <span className="font-semibold text-navy-700">10,000+</span> students this semester</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">How it works</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Your perfect study plan in 3 steps</h3>
            <p className="text-lg text-navy-600">No more manual scheduling. Let our AI organize your semester so you can focus on learning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform">
                <BookOpen className="w-10 h-10 text-teal-500" />
              </div>
              <div className="bg-teal-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-teal-600 mb-4">1</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Upload your syllabus</h4>
              <p className="text-navy-600">Just drop in your course documents. Our AI instantly extracts all your assignments, exams, and reading deadlines.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform">
                <Brain className="w-10 h-10 text-navy-500" />
              </div>
              <div className="bg-teal-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-teal-600 mb-4">2</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">AI generates a plan</h4>
              <p className="text-navy-600">StudyFlow calculates the exact time needed for each task and builds a personalized, stress-free weekly schedule.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform">
                <CheckCircle2 className="w-10 h-10 text-teal-500" />
              </div>
              <div className="bg-teal-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-teal-600 mb-4">3</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Crush your exams</h4>
              <p className="text-navy-600">Get gentle reminders when it's time to study. Follow the plan, retain more information, and ace your classes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-24 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Why StudyFlow AI</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Designed for the modern student</h3>
             <p className="text-lg text-navy-600">Stop drowning in coursework. We give you the tools to take back control of your time and mental health.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Clock className="w-8 h-8 text-white" />}
             title="Save 5+ Hours a Week"
             description="Stop wasting time figuring out what to study. Open the app and instantly know your most important task."
             colorClass="bg-teal-500"
            />
            <BenefitCard 
              icon={<Brain className="w-8 h-8 text-white" />}
              title="Reduce Academic Stress"
              description="No more last-minute cramming or midnight panic. Your AI breaks mountains of work into molehills."
              colorClass="bg-navy-600"
            />
            <BenefitCard 
              icon={<Calendar className="w-8 h-8 text-white" />}
              title="Dynamic Rescheduling"
              description="Life happens. If you miss a study session, the AI automatically readjusts your plan to keep you on track."
              colorClass="bg-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-l from-teal-400 to-transparent blur-3xl rounded-full mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-teal-400 font-semibold tracking-wide uppercase text-sm mb-3">Student Stories</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't just take our word for it</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I used to stay up until 3 AM cramming for finals. StudyFlow broke my syllabus down so perfectly that I was actually relaxed during exam week."
              author="Sarah Jenkins"
              role="Pre-Med Student, UCLA"
            />
            <TestimonialCard 
              quote="The best $5 I spend every month. It's like having a personal academic advisor living in my laptop. My GPA went from a 3.1 to a 3.8."
              author="Marcus Chen"
              role="Computer Science, UT Austin"
            />
            <TestimonialCard 
              quote="As a student athlete, my schedule is chaos. The dynamic rescheduling feature saved my life when away games moved my study blocks."
              author="Elena Rodriguez"
              role="Business major, NYU"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-500 to-navy-700 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to take control of your semester?</h2>
            <p className="text-teal-50 text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of students who are getting better grades with less stress. Get your personalized AI study plan today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="/auth/signup"
                className="px-8 py-4 bg-white text-navy-900 rounded-xl text-lg font-bold hover:bg-gray-100 hover:shadow-lg transition-all"
              >
                Start for Free
              </Link>
            </div>
            <p className="text-teal-100 text-sm mt-6 relative z-10">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Subcomponents
function BenefitCard({ icon, title, description, colorClass }: { icon: React.ReactNode, title: string, description: string, colorClass: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
      <div className={`w-16 h-16 rounded-xl ${colorClass} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold text-navy-900 mb-3">{title}</h4>
      <p className="text-navy-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
      <div className="flex space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
        ))}
      </div>
      <p className="text-white text-lg mb-8 italic">"{quote}"</p>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl uppercase">
          {author.charAt(0)}
        </div>
        <div>
          <h5 className="text-white font-semibold">{author}</h5>
          <p className="text-navy-300 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
