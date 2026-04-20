import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-lightGray py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-teal-500 p-1.5 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                StudyFlow AI
              </span>
            </Link>
            <p className="text-sm text-navy-300 max-w-sm">
              AI-powered academic planning for students
            </p>
            <p className="text-sm text-teal-400">
              <a href="mailto:hello@studyflowai.com" className="hover:text-teal-300 transition-colors">hello@studyflowai.com</a>
            </p>
          </div>
          
          {/* Links Col 1 */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-navy-300">
              <li><Link href="/features" className="hover:text-teal-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-400 transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          {/* Links Col 2 */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-navy-300">
              <li>
                <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy-800 text-center text-sm text-navy-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 StudyFlow AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
