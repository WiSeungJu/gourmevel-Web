/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-[200vh] bg-[#F3F3F3] text-[#111] selection:bg-black selection:text-white">
      <Header />
      
      <main>
        {/* Hero Section: Clean & Sharp Typography */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#F3F3F3]">
          {/* Subtle Background Elements - Very Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full border-[0.5px] border-black/5" />
          
          <div className="relative z-10 text-center">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-black/40">
                The Art of Gastronomy
              </span>
            </motion.div>

            {/* Main Title - Clean & Perfect Alignment */}
            <div className="relative text-black">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight"
              >
                <span className="block italic font-light font-serif text-5xl md:text-7xl lg:text-8xl mb-4 text-black/80">Taste The</span>
                <span className="text-black">Extraordinary</span>
              </motion.h1>
            </div>

            {/* Bottom Quote */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 relative inline-block"
            >
              <span className="font-serif text-sm md:text-base text-black/50 italic tracking-wide">
                &quot;Curating the unseen moments of table.&quot;
              </span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-black/20" />
            </motion.div>
          </div>
        </section>

        {/* Content Section: Compact & Artistic List */}
        <section className="py-40 px-6 md:px-12 bg-white">
          {/* Artistic Statement */}
          <div className="max-w-4xl mx-auto mb-40 text-center">
             <p className="font-display text-3xl md:text-5xl leading-tight opacity-90">
               &quot;We consume <span className="italic underline decoration-1 underline-offset-4">stories</span>, <br/>
               we digest <span className="italic underline decoration-1 underline-offset-4">culture</span>.&quot;
             </p>
          </div>

          {/* Compact List Layout */}
          <div className="max-w-5xl mx-auto border-t border-black">
            {[
              {
                id: "01",
                name: "Mingles",
                location: "Seoul",
                desc: "The Harmony of Nature",
                img: "https://images.unsplash.com/photo-1542129202-e2c72b216124?q=80&w=2692&auto=format&fit=crop" 
              },
              {
                id: "02",
                name: "Mosu",
                location: "Seoul",
                desc: "Innovation Defined",
                img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2940&auto=format&fit=crop"
              },
              {
                id: "03",
                name: "Jungsik",
                location: "New York",
                desc: "New Korean Cuisine",
                img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative border-b border-black cursor-pointer hover:bg-black hover:text-white transition-colors duration-500">
                <div className="flex flex-col md:flex-row items-baseline md:items-center py-12 px-4 md:px-8 gap-8 md:gap-20">
                  <span className="font-sans text-[10px] tracking-[0.2em] opacity-50 w-8">{item.id}</span>
                  <h2 className="font-display text-5xl md:text-7xl tracking-tight flex-1">{item.name}</h2>
                  <div className="flex flex-col md:items-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase">{item.location}</span>
                    <span className="font-serif italic text-sm">{item.desc}</span>
                  </div>
                </div>
                
                {/* Hover Reveal Image - 마우스 올렸을 때만 작게 뜨는 이미지 */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute right-20 top-1/2 -translate-y-1/2 w-48 h-32 hidden lg:block pointer-events-none z-10 mix-blend-difference"
                >
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale" />
                </motion.div>
              </div>
            ))}
          </div>

          <div className="text-center mt-32">
            <a href="/reviews" className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity">
              View All Reviews
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
