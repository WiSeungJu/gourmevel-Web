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
                  &ldquo;숨겨진 맛집으로의 초대든, 창의적인 협업 제안이든, 우리는 언제나 들을 준비가 되어 있습니다.&rdquo;
                </p>
              </div>

              <div className="space-y-8 pt-8">
                <div className="group">
                  <p className="font-sans text-xs tracking-widest text-brand-primary/40 uppercase mb-2">일반 문의</p>
                  <a href="mailto:contact@gourmevel.com" className="font-serif text-2xl text-brand-primary hover:text-brand-secondary transition-colors italic">
                    contact@gourmevel.com
                  </a>
                </div>
                
                <div className="group">
                  <p className="font-sans text-xs tracking-widest text-brand-primary/40 uppercase mb-2">공식 SNS</p>
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
                  <h3 className="font-display text-3xl text-brand-primary mb-4">전송 완료</h3>
                  <p className="font-serif text-brand-primary/60 max-w-xs leading-relaxed">
                    관심 가져주셔서 감사합니다. 메시지를 확인하는 대로 곧 답변 드리겠습니다.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-12 text-xs font-sans tracking-[0.2em] uppercase text-brand-secondary border-b border-brand-secondary/30 pb-1 hover:text-brand-primary hover:border-brand-primary transition-all"
                  >
                    다른 메시지 보내기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 group">
                      <label htmlFor="name" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">이름</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10"
                        placeholder="성함"
                      />
                    </div>
                    <div className="space-y-4 group">
                      <label htmlFor="email" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">이메일</label>
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
                    <label htmlFor="company" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">소속/회사</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10"
                      placeholder="레스토랑 또는 회사명"
                    />
                  </div>

                  <div className="space-y-4 group">
                    <label htmlFor="type" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">주제</label>
                    <div className="relative">
                      <select 
                        id="type" 
                        className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary appearance-none cursor-pointer rounded-none"
                      >
                        <option>일반 문의</option>
                        <option>협업 제안</option>
                        <option>레스토랑 초대</option>
                        <option>보도 및 미디어</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary/30">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 group">
                    <label htmlFor="message" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">메시지</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10 resize-none"
                      placeholder="제안하고 싶은 내용을 자유롭게 적어주세요..."
                    />
                  </div>

                  <div className="pt-8 text-right">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="group inline-flex items-center gap-4 bg-brand-primary text-brand-beige px-10 py-5 text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-brand-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:pr-8"
                    >
                      {formStatus === 'submitting' ? '전송 중...' : '메시지 보내기'}
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
