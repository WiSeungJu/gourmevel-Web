"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-beige selection:bg-brand-primary selection:text-brand-secondary">
      <Header />

      <main className="flex-grow pt-40 pb-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-24">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xs font-bold tracking-[0.3em] text-brand-secondary uppercase mb-6"
            >
              Get in Touch
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl text-brand-primary"
            >
              Start a Conversation
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Info & Context */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-[1px] bg-brand-primary/20" />
                <p className="font-serif text-xl md:text-2xl text-brand-primary/80 leading-relaxed pt-8">
                  &ldquo;Whether it&apos;s an invitation to a hidden gem or a creative partnership, we are always eager to listen.&rdquo;
                </p>
              </div>

              <div className="space-y-8 pt-8">
                <div className="group">
                  <p className="font-sans text-xs tracking-widest text-brand-primary/40 uppercase mb-2">General Inquiries</p>
                  <a href="mailto:contact@gourmevel.com" className="font-serif text-2xl text-brand-primary hover:text-brand-secondary transition-colors italic">
                    contact@gourmevel.com
                  </a>
                </div>
                
                <div className="group">
                  <p className="font-sans text-xs tracking-widest text-brand-primary/40 uppercase mb-2">Follow Our Journey</p>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl text-brand-primary hover:text-brand-secondary transition-colors italic">
                    @gourmevel
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Elegant Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-7 bg-white p-8 md:p-16 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-brand-primary/5"
            >
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-brand-primary/5 rounded-full flex items-center justify-center mb-8 text-brand-primary">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-3xl text-brand-primary mb-4">Message Sent</h3>
                  <p className="font-serif text-brand-primary/60 max-w-xs leading-relaxed">
                    Thank you for your interest. We will review your message and respond shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-12 text-xs font-sans tracking-[0.2em] uppercase text-brand-secondary border-b border-brand-secondary/30 pb-1 hover:text-brand-primary hover:border-brand-primary transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 group">
                      <label htmlFor="name" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-4 group">
                      <label htmlFor="email" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10"
                        placeholder="email@address.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 group">
                    <label htmlFor="company" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10"
                      placeholder="Restaurant or Company Name"
                    />
                  </div>

                  <div className="space-y-4 group">
                    <label htmlFor="type" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">Subject</label>
                    <div className="relative">
                      <select 
                        id="type" 
                        className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary appearance-none cursor-pointer rounded-none"
                      >
                        <option>General Inquiry</option>
                        <option>Collaboration Proposal</option>
                        <option>Restaurant Invitation</option>
                        <option>Press & Media</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary/30">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 group">
                    <label htmlFor="message" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10 resize-none"
                      placeholder="Tell us about your proposal..."
                    />
                  </div>

                  <div className="pt-8 text-right">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="group inline-flex items-center gap-4 bg-brand-primary text-brand-beige px-10 py-5 text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-brand-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:pr-8"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4 text-brand-secondary group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
