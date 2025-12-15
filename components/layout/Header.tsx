/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Menu, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#F3F3F3]/80 backdrop-blur-md transition-all duration-300 border-b border-black/5">
      <div className="max-w-screen-xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Mobile Menu Button - Left */}
        <button className="p-2 -ml-2 text-black hover:text-gray-600 transition-colors md:hidden">
          <Menu className="w-6 h-6" />
        </button>

        {/* Navigation - Left (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/reviews" className="text-xs tracking-[0.2em] text-black hover:opacity-50 transition-opacity uppercase font-sans font-medium">
            Reviews
          </Link>
          <Link href="/essays" className="text-xs tracking-[0.2em] text-black hover:opacity-50 transition-opacity uppercase font-sans font-medium">
            Essays
          </Link>
        </nav>

        {/* Logo - Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="block">
            <div className="relative h-6 w-32 md:h-8 md:w-40">
              <img 
                src="/logo.png" 
                alt="Gourmevel" 
                className="w-full h-full object-contain filter invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </Link>
        </div>

        {/* Action - Right */}
        <div className="flex items-center gap-8">
          <Link href="/contact" className="hidden md:block text-xs tracking-[0.2em] text-black hover:opacity-50 transition-opacity uppercase font-sans font-medium">
            Contact
          </Link>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:opacity-50 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
