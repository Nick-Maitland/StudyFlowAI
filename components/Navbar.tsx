import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-teal-500 p-2 rounded-lg group-hover:bg-teal-600 transition-colors">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-navy-900 to-teal-600 bg-clip-text text-transparent">
              StudyFlow AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">About</Link>
            <Link href="/features" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Pricing</Link>
            <Link href="/faq" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">FAQ</Link>
            <Link href="/contact" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/auth/signin"
              className="px-4 py-2 text-navy-600 hover:text-navy-900 font-medium transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="px-5 py-2.5 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button (Simplified for now) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-navy-900 focus:outline-none">
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
