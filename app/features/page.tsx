import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Upload, CalendarDays, BellRing, BarChart3, Bot, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | StudyFlow AI',
  description: 'Explore the powerful AI features of StudyFlow. From syllabus uploads to dynamic study scheduling.',
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-lightGray selection:bg-teal-200 selection:text-navy-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-full opacity-20 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-l from-teal-400 to-transparent blur-3xl rounded-full mix-blend-overlay"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
             Work smarter, <span className="text-teal-400">not harder.</span>
          </h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto font-medium">
             Discover how our AI tools organize your academic life so you can focus on mastering the material.
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Feature 1: Syllabus Upload */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white p-12 rounded-3xl shadow-xl shadow-teal-500/5 border border-gray-100 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <Upload className="w-16 h-16 text-teal-500 mb-8 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300" />
              <div className="space-y-4 relative z-10">
                <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                <div className="h-4 w-full bg-lightGray rounded"></div>
                <div className="h-4 w-5/6 bg-lightGray rounded"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full mb-6 border border-teal-100 shadow-sm text-sm font-semibold">
                 Instant Setup
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Syllabus & Deadline Upload</h2>
              <p className="text-xl text-navy-600 leading-relaxed">
                 Don't waste hours manually typing out your semester. Simply upload your PDF syllabi, and our AI instantly extracts all reading assignments, papers, and exam dates into a central database.
              </p>
            </div>
          </div>

          {/* Feature 2: Weekly Planner */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full mb-6 border border-indigo-100 shadow-sm text-sm font-semibold">
                 Core Engine
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Personalized Weekly Study Planner</h2>
              <p className="text-xl text-navy-600 leading-relaxed">
                 StudyFlow calculates the exact amount of time you need to complete your coursework. It then builds a stress-free, dynamic schedule that adapts automatically if you fall behind or work ahead.
              </p>
            </div>
            <div className="bg-navy-900 p-12 rounded-3xl shadow-xl shadow-navy-900/10 border border-navy-800 relative group overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/20 rounded-tr-full transition-transform group-hover:scale-110 blur-xl"></div>
              <CalendarDays className="w-16 h-16 text-teal-400 mb-8 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300" />
              <div className="grid grid-cols-5 gap-2 relative z-10 opacity-70">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={`h-8 rounded ${i % 3 === 0 ? 'bg-teal-500' : 'bg-navy-700'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 3: Smart Reminders */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white p-12 rounded-3xl shadow-xl shadow-teal-500/5 border border-gray-100 relative group overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-100 rounded-full opacity-50 blur-3xl transition-transform group-hover:scale-150"></div>
              <BellRing className="w-16 h-16 text-yellow-500 mx-auto animate-pulse relative z-10" />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full mb-6 border border-yellow-100 shadow-sm text-sm font-semibold">
                 Never Miss a Beat
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Smart Reminders</h2>
              <p className="text-xl text-navy-600 leading-relaxed">
                 Get gentle, timely notifications right when you need to start studying or submit an assignment. Our smart alerts prevent last-minute cramming and keep you consistently on track.
              </p>
            </div>
          </div>

          {/* Feature 4: Dashboard */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full mb-6 border border-teal-100 shadow-sm text-sm font-semibold">
                 Analytics
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Workload & Progress Dashboard</h2>
              <p className="text-xl text-navy-600 leading-relaxed">
                 Visualize your entire semester at a glance. Track your completed assignments, monitor your remaining workload, and see your study habits improve week over week.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl shadow-teal-500/5 border border-gray-100 relative group overflow-hidden flex items-end h-64 space-x-4">
               {/* Decorative Bar Chart */}
               <BarChart3 className="absolute top-6 left-6 w-8 h-8 text-navy-300" />
               <div className="w-1/4 bg-lightGray h-24 rounded-t-lg group-hover:h-32 transition-all duration-500"></div>
               <div className="w-1/4 bg-teal-200 h-32 rounded-t-lg group-hover:h-40 transition-all duration-500 delay-75"></div>
               <div className="w-1/4 bg-teal-400 h-48 rounded-t-lg group-hover:h-56 transition-all duration-500 delay-150"></div>
               <div className="w-1/4 bg-navy-600 h-40 rounded-t-lg group-hover:h-48 transition-all duration-500 delay-200"></div>
            </div>
          </div>

          {/* Feature 5: AI Assistant */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-teal-500 to-navy-700 p-12 rounded-3xl shadow-2xl relative group overflow-hidden text-center">
              <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <Bot className="w-20 h-20 text-white mx-auto mb-6 relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block text-white font-medium border border-white/20">
                 "How should I study for Biology midterm?"
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full mb-6 border border-navy-100 shadow-sm text-sm font-semibold">
                 24/7 Support
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">AI Study Assistant</h2>
              <p className="text-xl text-navy-600 leading-relaxed mb-8">
                 Stuck on a concept? Our built-in AI tutor can break down complex topics, generate practice flashcards from your syllabus, and answer questions to unblock your study sessions instantly.
              </p>
              <Link 
                href="/auth/signup" 
                className="inline-flex items-center space-x-2 text-teal-600 font-bold text-lg hover:text-teal-700 group transition-colors"
               >
                 <span>Experience the AI Assistant</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lightGray border-t border-gray-200">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Ready to upgrade your workflow?</h2>
            <Link
               href="/auth/signup"
               className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white rounded-xl text-lg font-bold hover:bg-teal-600 hover:shadow-lg transition-all"
            >
               Start your free trial today
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
