"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedType, setSelectedType] = useState('일반 문의');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus('submitting');

    try {
      await emailjs.sendForm(
        'service_hspd6vk',  // Service ID
        'template_otz5a9n', // Template ID
        formRef.current,
        'lPO193BxNbmlVsd8V' // Public Key
      );
      setFormStatus('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      alert('메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const contactTypes = [
    '일반 문의',
    '협업 제안',
    '레스토랑 초대',
    '보도 및 미디어'
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            {/* Left Column: Info & Context */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 space-y-12 text-center lg:text-left"
            >
              <div className="relative inline-block lg:block">
                <div className="hidden lg:block absolute top-0 left-0 w-12 h-[1px] bg-brand-primary/20" />
                <div className="font-serif text-lg md:text-2xl text-brand-primary/80 leading-relaxed pt-0 lg:pt-8">
                  <span className="block whitespace-nowrap">&ldquo;숨겨진 맛집으로의 초대든,</span>
                  <span className="block whitespace-nowrap">창의적인 협업 제안이든,</span>
                  <span className="block whitespace-nowrap mt-2">우리는 언제나 들을</span>
                  <span className="block whitespace-nowrap">준비가 되어 있습니다.&rdquo;</span>
                </div>
              </div>

              <div className="space-y-8 pt-4 lg:pt-8 flex flex-col items-center lg:items-start">
                <div className="group">
                  <p className="font-sans text-xs tracking-widest text-brand-primary/40 uppercase mb-2">일반 문의</p>
                  <a href="mailto:gourmevel@gmail.com" className="font-serif text-2xl text-brand-primary hover:text-brand-secondary transition-colors italic">
                    gourmevel@gmail.com
                  </a>
                </div>

                <div className="group">
                  <p className="font-sans text-xs tracking-widest text-brand-primary/40 uppercase mb-2">Instagram</p>
                  <a href="https://www.instagram.com/gourmevel/" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl text-brand-primary hover:text-brand-secondary transition-colors italic">
                    @gourmevel
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-brand-primary/10 w-full">
                <p className="font-sans text-xs tracking-widest text-brand-primary/40 uppercase mb-4">Media Kit</p>
                <a href="/files/media-kit.pdf" download className="group inline-flex items-center gap-3 font-serif text-lg text-brand-primary hover:text-brand-secondary transition-colors">
                  <span className="italic decoration-brand-primary/30 underline underline-offset-4 group-hover:decoration-brand-secondary/30">
                    Download 2026 Media Kit
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform group-hover:translate-y-1" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Elegant Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-7 bg-white p-8 md:p-16 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-brand-primary/5 relative z-10"
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
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 group">
                      <label htmlFor="name" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">이름</label>
                      <input
                        type="text"
                        id="name"
                        name="name" // EmailJS needs name attribute
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
                        name="email" // EmailJS needs name attribute
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
                      name="company" // EmailJS needs name attribute
                      className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10"
                      placeholder="레스토랑 또는 회사명"
                    />
                  </div>

                  <div className="space-y-4 group relative">
                    <label htmlFor="type" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">주제</label>

                    {/* Custom Dropdown Trigger */}
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full border-b border-brand-stone py-2 flex items-center justify-between group-focus-within:border-brand-primary transition-colors bg-transparent"
                    >
                      <span className="font-serif text-lg text-brand-primary text-left">{selectedType}</span>
                      <motion.div
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-brand-primary/30"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
                        </svg>
                      </motion.div>
                    </button>

                    {/* Custom Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 right-0 top-full mt-2 bg-white shadow-xl border border-brand-primary/5 z-50 max-h-60 overflow-y-auto"
                        >
                          {contactTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setSelectedType(type);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-6 py-4 font-serif text-lg hover:bg-brand-beige transition-colors ${selectedType === type ? 'text-brand-primary bg-brand-primary/5' : 'text-brand-primary/60'
                                }`}
                            >
                              {type}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Hidden Select for Form Submission logic */}
                    <select
                      id="type"
                      name="type" // EmailJS needs name attribute
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="hidden"
                    >
                      {contactTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {/* Also hidden input for fallback to ensure value is sent */}
                    <input type="hidden" name="type" value={selectedType} />
                  </div>

                  <div className="space-y-4 group">
                    <label htmlFor="message" className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-primary/40 uppercase group-focus-within:text-brand-secondary transition-colors">메시지</label>
                    <textarea
                      id="message"
                      name="message" // EmailJS needs name attribute
                      required
                      rows={4}
                      className="w-full border-b border-brand-stone py-2 focus:outline-none focus:border-brand-primary transition-colors bg-transparent font-serif text-lg text-brand-primary placeholder-brand-primary/10 resize-none"
                      placeholder={
                        selectedType === '협업 제안' || selectedType === '레스토랑 초대'
                          ? "구체적인 제안 내용과 예상 일정, 예산(원고료/초대 범위) 등을 함께 적어주시면 더욱 빠른 검토가 가능합니다."
                          : "문의하실 내용을 자유롭게 적어주세요."
                      }
                    />
                  </div>

                  <div className="pt-8 text-right">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="group inline-flex items-center gap-4 bg-brand-primary text-brand-beige px-10 py-5 text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-brand-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:pr-8"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          전송 중...
                        </>
                      ) : (
                        <>
                          메시지 보내기
                          <Send className="w-4 h-4 text-brand-secondary group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div >
      </main >

      <Footer />
    </div >
  );
}
