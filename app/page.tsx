"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Data
const RESTAURANTS = [
  {
    id: "01",
    name: "Mingles",
    location: "Seoul",
    desc: "자연의 조화",
    img: "https://images.unsplash.com/photo-1542129202-e2c72b216124?q=80&w=2692&auto=format&fit=crop" 
  },
  {
    id: "02",
    name: "Mosu",
    location: "Seoul",
    desc: "혁신의 정의",
    img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Jungsik",
    location: "New York",
    desc: "새로운 한식",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Onjium",
    location: "Seoul",
    desc: "전통의 미학",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for Hero
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div 
      ref={containerRef} 
      className="min-h-[200vh] bg-brand-paper selection:bg-brand-black selection:text-brand-paper cursor-default"
    >
      <Header />
      
      <main>
        {/* Hero Section: Abstract Art Motion */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F2F1ED]">
          
          {/* Abstract Liquid Shape - Represents 'Taste' & 'Fluidity' */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="relative w-[40vw] h-[40vw] min-w-[300px] min-h-[300px]">
               {/* SVG Filter Definition */}
               <svg className="absolute w-0 h-0">
                 <filter id="liquid-filter">
                   <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="warp">
                     <animate attributeName="baseFrequency" dur="20s" values="0.01;0.005;0.01" repeatCount="indefinite" />
                   </feTurbulence>
                   <feDisplacementMap in="SourceGraphic" in2="warp" scale="60" xChannelSelector="R" yChannelSelector="G" />
                 </filter>
               </svg>
               
               {/* The Shape applying the filter */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="w-full h-full bg-black rounded-full opacity-90 mix-blend-multiply blur-3xl"
                 style={{ filter: "url(#liquid-filter)" }}
               />
               
               {/* Secondary overlapping shape for depth */}
               <motion.div 
                 animate={{ 
                   scale: [1, 1.1, 1],
                   rotate: [0, 90, 0]
                 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-black/20 rounded-full"
               />
             </div>
          </div>

          {/* Minimal Content Overlay */}
          <div className="relative z-10 text-center mix-blend-difference text-[#F2F1ED]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="font-serif italic text-xl md:text-2xl tracking-wide opacity-90 mb-6">
                Journey of Taste
              </p>
              <div className="w-[1px] h-16 bg-current mx-auto mb-6 opacity-50" />
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase opacity-80">
                Seoul — 2022
              </p>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 mix-blend-difference text-[#F2F1ED]"
          >
             <span className="font-sans text-[10px] tracking-widest uppercase animate-pulse">Scroll</span>
          </motion.div>
        </section>

        {/* List Section: Interaction Heavy */}
        <section className="py-40 px-6 md:px-12 bg-brand-paper relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-end justify-between mb-24 border-b border-black pb-4">
               <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase">Selected Dining</h2>
               <span className="font-sans text-[10px] tracking-[0.2em] uppercase">04</span>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-20">
              {/* List */}
              <div className="w-full md:w-1/2 flex flex-col">
                {RESTAURANTS.map((item, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className="group relative border-b border-black/10 hover:border-black transition-colors duration-300 py-12 md:py-16 cursor-pointer flex flex-col"
                  >
                     <div className="flex items-baseline gap-8 md:gap-12 transition-transform duration-500 group-hover:translate-x-4">
                        <span className="font-sans text-xs tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                          {item.id}
                        </span>
                        <h3 className="font-display text-4xl md:text-7xl tracking-tight text-brand-black group-hover:italic transition-all">
                          {item.name}
                        </h3>
                     </div>
                     
                     <div className="mt-4 md:mt-6 flex gap-6 md:gap-10 items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 pl-12 md:pl-20">
                        <span className="font-sans text-[10px] tracking-[0.2em] uppercase">{item.location}</span>
                        <span className="font-serif italic text-sm md:text-lg">{item.desc}</span>
                     </div>

                     {/* Mobile Image Reveal (Inline) */}
                     <div className="md:hidden mt-6 overflow-hidden max-h-0 group-hover:max-h-[300px] transition-all duration-500 ease-in-out">
                        <div className="relative w-full h-48">
                          <Image 
                            src={item.img} 
                            alt={item.name} 
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                     </div>
                  </div>
                ))}
              </div>

              {/* Desktop Image Preview (Sticky) */}
              <div className="hidden md:block w-1/2 relative">
                 <div className="sticky top-32 h-[600px] w-full overflow-hidden bg-[#EAE9E4]">
                    <AnimatePresence mode="wait">
                       <motion.div 
                         key={activeIdx}
                         initial={{ opacity: 0, scale: 1.1 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.7, ease: "easeOut" }}
                         className="relative w-full h-full"
                       >
                         <Image
                           src={RESTAURANTS[activeIdx].img}
                           alt={RESTAURANTS[activeIdx].name}
                           fill
                           className="object-cover grayscale-[20%]"
                           priority
                           sizes="50vw"
                         />
                       </motion.div>
                    </AnimatePresence>
                    {/* Caption Overlay */}
                    <motion.div 
                      key={`caption-${activeIdx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 max-w-sm"
                    >
                       <p className="font-serif italic text-lg mb-2">{RESTAURANTS[activeIdx].desc}</p>
                       <p className="font-sans text-[10px] tracking-widest uppercase opacity-60">Featured in {RESTAURANTS[activeIdx].location}</p>
                    </motion.div>
                 </div>
              </div>
            </div>

            <div className="text-center mt-40">
              <a href="/reviews" className="group inline-flex flex-col items-center gap-2">
                 <span className="font-serif italic text-2xl group-hover:opacity-50 transition-opacity">View All Reviews</span>
                 <span className="block w-[1px] h-12 bg-black group-hover:h-20 transition-all duration-500"></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
