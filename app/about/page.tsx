import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Sparkles, BookOpen } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About StudyFlow AI',
  description: 'Learn more about why StudyFlow AI exists and our mission to help students succeed.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-lightGray selection:bg-teal-200 selection:text-navy-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-navy-900 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/2 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-transparent blur-3xl rounded-full mix-blend-overlay"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
             About <span className="text-teal-400">StudyFlow AI</span>
          </h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto font-medium">
             We believe that academic success shouldn't come at the cost of your mental health.
          </p>
        </div>
      </section>

      <section className="py-20 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center space-x-3">
                   <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-teal-600" />
                   </div>
                   <span>Our Story</span>
                </h2>
                <div className="space-y-4 text-lg text-navy-600 leading-relaxed">
                   <p>
                      StudyFlow AI was born out of shared frustration. We watched talented, hardworking college and university students burn out simply because keeping track of overlapping deadlines, reading assignments, and exam schedules was a full-time job in itself.
                   </p>
                   <p>
                      We realized that the traditional static "planner" wasn't cutting it. It couldn't dynamically reschedule, it couldn't estimate study time, and it certainly couldn't reduce the cognitive load of planning. So, we built StudyFlow AI: a smart platform that does the heavy lifting of organization, allowing students to focus purely on learning and living.
                   </p>
                </div>
             </div>
             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-teal-500/5 border border-gray-100 transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
                <blockquote className="text-xl font-medium text-navy-800 italic leading-relaxed">
                   "Too many students spend 30% of their study time just figuring out what they are supposed to be studying. We built StudyFlow AI to bring that number down to zero."
                </blockquote>
             </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-teal-500 to-navy-700 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group">
             <div className="absolute left-0 bottom-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
             <Target className="w-16 h-16 text-white mx-auto mb-6 relative z-10" />
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Our Mission</h2>
             <p className="text-xl md:text-2xl text-teal-50 font-medium max-w-3xl mx-auto leading-relaxed relative z-10">
                "To empower students to achieve extraordinary academic results while maintaining exceptional mental well-being, through the effortless and intelligent orchestration of their time."
             </p>
          </div>

          {/* Who it's For & AI Section */}
          <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 transform group-hover:-translate-y-2 transition-transform">
                   <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Who This Is For</h2>
                <p className="text-lg text-navy-600 mb-8">
                   StudyFlow AI is carefully tailored for college and university students navigating complex and demanding schedules.
                </p>
                <ul className="space-y-4 text-navy-700 font-medium">
                   <li className="flex items-center space-x-4 bg-lightGray p-3 rounded-lg">
                      <div className="w-2.5 h-2.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span>Students managing heavy course loads</span>
                   </li>
                   <li className="flex items-center space-x-4 bg-lightGray p-3 rounded-lg">
                      <div className="w-2.5 h-2.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span>Student athletes and part-time workers</span>
                   </li>
                   <li className="flex items-center space-x-4 bg-lightGray p-3 rounded-lg">
                      <div className="w-2.5 h-2.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span>Anyone looking to boost grades & reduce stress</span>
                   </li>
                </ul>
             </div>

             <div className="bg-navy-900 p-10 rounded-3xl shadow-xl shadow-navy-900/10 border border-navy-800 text-white relative overflow-hidden group hover:border-teal-500/50 transition-colors">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500 opacity-20 rounded-full blur-3xl group-hover:bg-teal-400 transition-colors"></div>
                <div className="w-16 h-16 bg-navy-800 border border-navy-700 rounded-2xl flex items-center justify-center mb-8 relative z-10 transform group-hover:-translate-y-2 transition-transform">
                   <Sparkles className="w-8 h-8 text-teal-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-6 relative z-10">How AI Changes The Game</h2>
                <div className="space-y-5 text-navy-300 font-medium relative z-10 leading-relaxed">
                   <p>
                      Academic planning is a complex logistical problem. When a professor drops an unexpected paper, or a study session takes twice as long as expected, a manual planner shatters.
                   </p>
                   <p>
                      Our AI proactively monitors your deadlines, assesses your average study speed, and <span className="text-white">dynamically reallocates tasks</span>. It ensures you review material right before the forgetting curve sets in. 
                   </p>
                   <br />
                   <p className="text-teal-400 font-semibold text-lg flex items-center space-x-2">
                       <Sparkles className="w-5 h-5" />
                       <span>It's a brilliant academic advisor inside your pocket.</span>
                   </p>
                </div>
             </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
