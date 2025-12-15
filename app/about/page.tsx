"use client";

import { motion, Variants } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F1ED] text-[#111] selection:bg-black selection:text-[#F2F1ED]">
      <Header />

      <main>
        {/* Title Section */}
        <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-black/10">
          <div className="max-w-screen-xl mx-auto text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-[10px] tracking-[0.3em] uppercase block mb-6 mix-blend-difference"
            >
              Our Philosophy
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-display text-5xl md:text-8xl tracking-tight mix-blend-difference"
            >
              Curating<br/>The Senses
            </motion.h1>
          </div>
        </section>

        {/* Intro Text Section */}
        <section className="py-32 px-6 md:px-12">
           <div className="max-w-3xl mx-auto text-center">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-serif text-xl md:text-3xl leading-relaxed text-black/80 break-keep"
              >
                &ldquo;Gourmevel은 미식(Gourmet)과 여행(Travel)의 경계에서,<br className="hidden md:block" />
                단순히 먹는 행위를 넘어 그 안에 담긴 문화와 이야기를 탐구합니다.&rdquo;
              </motion.p>
              <div className="w-[1px] h-20 bg-black/20 mx-auto my-16" />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-sans text-xs md:text-sm tracking-wide leading-loose text-black/60 uppercase"
              >
                We believe that taste is the most powerful medium to remember a place.
                <br />
                It is an intangible heritage that connects the past and the present.
              </motion.p>
           </div>
        </section>

        {/* Visual Bridge - Abstract Liquid Shape */}
        <section className="relative py-20 flex justify-center items-center overflow-hidden bg-[#F2F1ED]">
           <div className="relative w-[30vw] h-[30vw] min-w-[250px] min-h-[250px]">
             {/* SVG Filter Definition */}
             <svg className="absolute w-0 h-0">
               <filter id="liquid-filter-about">
                 <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="warp">
                   <animate attributeName="baseFrequency" dur="20s" values="0.01;0.005;0.01" repeatCount="indefinite" />
                 </feTurbulence>
                 <feDisplacementMap in="SourceGraphic" in2="warp" scale="60" xChannelSelector="R" yChannelSelector="G" />
               </filter>
             </svg>
             
             {/* The Shape applying the filter */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="w-full h-full bg-black rounded-full opacity-10 mix-blend-multiply blur-3xl"
               style={{ filter: "url(#liquid-filter-about)" }}
             />
           </div>
        </section>

        {/* Content Section */}
        <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-32 space-y-40">
          
          {/* 01. Resonance */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeInUp}
              className="order-2 md:order-1 relative h-64 md:h-80 flex items-center justify-center"
            >
               {/* Abstract Diffusion Line Art */}
               <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
                 <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                 <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                 <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                 <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
                 {/* Floating Particles */}
                 <circle cx="140" cy="60" r="1" fill="currentColor" opacity="0.6" />
                 <circle cx="60" cy="140" r="1.5" fill="currentColor" opacity="0.4" />
                 <circle cx="160" cy="120" r="1" fill="currentColor" opacity="0.5" />
               </svg>
               {/* Subtle Glow Behind */}
               <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl opacity-40 scale-75" />
            </motion.div>
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeInUp}
              className="order-1 md:order-2"
            >
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 block">01. Resonance</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8">맛의 공명</h2>
              <p className="font-serif text-lg leading-relaxed text-black/70">
                우리는 맛이 주는 깊은 여운에 주목합니다. 
                단순히 미각적인 쾌락을 넘어, 공간과 사람, 그리고 시간이 빚어내는 총체적인 경험이 어떻게 우리 내면에 공명(Resonance)하는지를 기록합니다.
                일렁이는 파동 그래픽은 이러한 맛의 영향력을 시각화한 것입니다.
              </p>
            </motion.div>
          </section>

          {/* 02. Harmony */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeInUp}
            >
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 block">02. Harmony</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8">문화의 융합</h2>
              <p className="font-serif text-lg leading-relaxed text-black/70">
                식탁 위는 서로 다른 문화가 만나는 가장 평화로운 장소입니다.
                우리는 로컬의 고유한 식재료와 셰프의 철학이 만나 새로운 가치를 만들어내는 융합(Harmony)의 순간을 포착합니다.
                검은색 잉크가 물에 번지듯, 자연스럽게 스며드는 문화를 지향합니다.
              </p>
            </motion.div>
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeInUp}
              className="relative"
            >
                {/* Abstract Line Art representing blending */}
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
                    <path d="M20,100 Q100,20 180,100 T20,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M20,110 Q100,30 180,110 T20,110" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                    <path d="M20,120 Q100,40 180,120 T20,120" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                </svg>
            </motion.div>
          </section>

          {/* 03. Essence */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
             <motion.div 
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               variants={fadeInUp}
               className="order-2 md:order-1 flex justify-center"
             >
                <div className="w-40 h-40 border border-black/80 rotate-45" />
             </motion.div>
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeInUp}
              className="order-1 md:order-2"
            >
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 block">03. Essence</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8">본질의 탐구</h2>
              <p className="font-serif text-lg leading-relaxed text-black/70">
                트렌드에 휩쓸리지 않고, 요리의 본질(Essence)에 집중합니다.
                화려한 장식보다는 재료 본연의 맛을, 자극적인 연출보다는 진정성 있는 이야기를 전달하려 합니다.
                정형화된 틀을 벗어난 마름모꼴의 도형은 이러한 우리의 독창적인 시선을 상징합니다.
              </p>
            </motion.div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
