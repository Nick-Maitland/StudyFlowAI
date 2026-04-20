import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | StudyFlow AI',
  description: 'Get in touch with the StudyFlow AI team for support, institutional pricing, or general inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-lightGray selection:bg-teal-200 selection:text-navy-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none transform translate-x-1/3 translate-y-1/3">
           <div className="absolute inset-0 bg-gradient-to-tl from-teal-400 to-transparent blur-3xl rounded-full mix-blend-overlay"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
             Get in <span className="text-teal-400">touch.</span>
          </h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto font-medium">
             Whether you're a student needing help with your planner, or a university looking for a campus-wide solution, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 flex-1 -mt-16 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
             
             {/* Contact Info Sidebar */}
             <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy-900/5 border border-gray-100 flex flex-col h-full">
                   <h2 className="text-2xl font-bold text-navy-900 mb-8">Contact Information</h2>
                   
                   <div className="space-y-8 flex-1">
                      <div className="flex items-start space-x-4">
                         <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 text-teal-600">
                            <Mail className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-navy-900 mb-1">Email Support</h3>
                            <a href="mailto:support@studyflow.ai" className="text-navy-600 hover:text-teal-600 transition-colors">support@studyflow.ai</a>
                            <p className="text-sm text-navy-400 mt-1">We typically reply within 24 hours.</p>
                         </div>
                      </div>

                      <div className="flex items-start space-x-4">
                         <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600">
                            <MessageSquare className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-navy-900 mb-1">Institutional Sales</h3>
                            <a href="mailto:campus@studyflow.ai" className="text-navy-600 hover:text-indigo-600 transition-colors">campus@studyflow.ai</a>
                            <p className="text-sm text-navy-400 mt-1">For bulk university licenses.</p>
                         </div>
                      </div>

                      <div className="flex items-start space-x-4">
                         <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0 text-yellow-600">
                            <MapPin className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-navy-900 mb-1">Headquarters</h3>
                            <p className="text-navy-600">123 Education Drive<br />Suite 400<br />San Francisco, CA 94105</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Contact Form */}
             <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy-900/5 border border-gray-100">
                   <h2 className="text-2xl font-bold text-navy-900 mb-8">Send us a message</h2>
                   
                   <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-semibold text-navy-700">First Name</label>
                            <input 
                               type="text" 
                               id="firstName" 
                               className="w-full px-4 py-3 bg-lightGray border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-navy-900"
                               placeholder="Jane"
                            />
                         </div>
                         <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-semibold text-navy-700">Last Name</label>
                            <input 
                               type="text" 
                               id="lastName" 
                               className="w-full px-4 py-3 bg-lightGray border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-navy-900"
                               placeholder="Doe"
                            />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label htmlFor="email" className="block text-sm font-semibold text-navy-700">Email Address</label>
                         <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-3 bg-lightGray border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-navy-900"
                            placeholder="jane@university.edu"
                         />
                      </div>

                      <div className="space-y-2">
                         <label htmlFor="subject" className="block text-sm font-semibold text-navy-700">How can we help?</label>
                         <select 
                            id="subject"
                            className="w-full px-4 py-3 bg-lightGray border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-navy-900 appearance-none"
                         >
                            <option>I have a question about my account</option>
                            <option>I'm interested in the Campus plan</option>
                            <option>I'd like to report a bug</option>
                            <option>Other / General Inquiry</option>
                         </select>
                      </div>

                      <div className="space-y-2">
                         <label htmlFor="message" className="block text-sm font-semibold text-navy-700">Message</label>
                         <textarea 
                            id="message" 
                            rows={5}
                            className="w-full px-4 py-3 bg-lightGray border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-navy-900 resize-none"
                            placeholder="Tell us more about what you need..."
                         ></textarea>
                      </div>

                      <button 
                         type="button"
                         className="w-full bg-teal-500 text-white font-bold py-4 px-6 rounded-xl hover:bg-teal-600 hover:shadow-lg transition-all flex items-center justify-center space-x-2 group"
                      >
                         <span>Send Message</span>
                         <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                   </form>
                </div>
             </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
