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
              Visualizing<br/>The Intangible
            </motion.h1>
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
          
          {/* 01. Diffusion */}
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
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 block">01. Diffusion</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8">맛의 확산</h2>
              <p className="font-serif text-lg leading-relaxed text-black/70">
                입안에서 맛이 퍼져나가는 순간, 혹은 요리의 향이 공기 중으로 번지는 찰나의 순간을 시각화했습니다. 
                고정되지 않고 끊임없이 일렁이는 움직임은 시시각각 변하는 미각의 경험을 상징합니다.
              </p>
            </motion.div>
          </section>

          {/* 02. Blending */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeInUp}
            >
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 block">02. Blending</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8">융합과 조화</h2>
              <p className="font-serif text-lg leading-relaxed text-black/70">
                서로 다른 식재료가 섞이고, 셰프의 손길을 거쳐 하나의 요리로 탄생하는 &apos;혼합의 과정&apos;을 뜻합니다. 
                검은색 잉크가 물에 번지는 듯한 형상은 동양적인 여백의 미와 깊이를 동시에 선사합니다.
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

          {/* 03. Formless */}
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
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 block">03. Formless</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8">비정형의 미학</h2>
              <p className="font-serif text-lg leading-relaxed text-black/70">
                정형화된 틀을 벗어나, 규정할 수 없는 &apos;감각 그 자체&apos;를 표현하여 남다르고 감각적인 아이덴티티를 보여줍니다. 
                이는 곧 형태는 없지만 강렬한 인상을 남기는, 우리가 추구하는 &apos;맛의 기억&apos;입니다.
              </p>
            </motion.div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
