/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Instagram, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 mix-blend-difference text-[#F2F1ED] pointer-events-none">
        <div className="w-full px-6 md:px-12 py-6 grid grid-cols-3 items-center">
          
          {/* Left Section: Info (Desktop) / Menu (Mobile) */}
          <div className="flex justify-start items-center pointer-events-auto">
            <span className="hidden md:block font-sans text-[10px] tracking-[0.2em] uppercase opacity-80">
              Est. 2024 — Seoul
            </span>
            <button className="md:hidden p-2 -ml-2 hover:opacity-70 transition-opacity">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Center Section: Logo */}
          <div className="flex justify-center pointer-events-auto">
            <Link href="/" className="block relative w-24 md:w-32 hover:opacity-70 transition-opacity">
               <img 
                 src="/logo.png" 
                 alt="Gourmevel" 
                 className="w-full h-auto object-contain filter invert brightness-0 contrast-200" 
               />
            </Link>
          </div>

          {/* Right Section: Navigation & CTA */}
          <nav className="flex justify-end items-center pointer-events-auto">
             <div className="hidden md:flex items-center gap-8">
               <div className="flex gap-6">
                 <Link href="/about" className="font-sans text-[10px] tracking-[0.2em] uppercase hover:underline underline-offset-4 decoration-1">
                   About
                 </Link>
                 <Link href="/reviews" className="font-sans text-[10px] tracking-[0.2em] uppercase hover:underline underline-offset-4 decoration-1">
                   Reviews
                 </Link>
                 <Link href="/essays" className="font-sans text-[10px] tracking-[0.2em] uppercase hover:underline underline-offset-4 decoration-1">
                   Essays
                 </Link>
               </div>
               
               <div className="w-[1px] h-3 bg-[#F2F1ED] opacity-30" />

               <div className="flex items-center gap-6">
                 <button 
                   onClick={() => setIsSearchOpen(true)}
                   className="hover:opacity-70 transition-opacity"
                 >
                   <Search className="w-4 h-4" />
                 </button>
                 <a 
                   href="https://instagram.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:opacity-70 transition-opacity"
                 >
                   <Instagram className="w-4 h-4" />
                 </a>
               </div>

               {/* Styled Contact Button */}
               <Link href="/contact" className="font-sans text-[10px] tracking-[0.2em] uppercase border border-[#F2F1ED] px-6 py-2 hover:bg-[#F2F1ED] hover:text-black transition-all duration-300">
                 Contact
               </Link>
             </div>
             
             {/* Mobile Icons */}
             <div className="md:hidden flex items-center gap-4">
               <button onClick={() => setIsSearchOpen(true)}>
                 <Search className="w-5 h-5" />
               </button>
               <Link href="/contact" className="font-sans text-[10px] tracking-[0.2em] uppercase">
                 Contact
               </Link>
             </div>
          </nav>
        </div>
      </header>

      {/* Full Screen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#F2F1ED] text-[#111] flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 p-4 hover:opacity-50 transition-opacity"
            >
              <X className="w-8 h-8 font-light" />
            </button>

            <div className="w-full max-w-3xl px-6">
              <span className="block text-center font-sans text-[10px] tracking-[0.3em] uppercase mb-8 opacity-50">
                Search Journal
              </span>
              <div className="relative border-b border-black">
                <input 
                  type="text" 
                  placeholder="Type to search..." 
                  className="w-full bg-transparent py-6 text-center font-display text-4xl md:text-6xl placeholder:text-black/10 focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="mt-12 text-center">
                 <p className="font-serif italic text-black/40">Press Enter to search</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
