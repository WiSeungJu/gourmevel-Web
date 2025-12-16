"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { urlFor } from "@/sanity/lib/image";
import { ArrowUpRight } from "lucide-react";

// Types
interface Article {
  _id: string;
  title: string;
  subtitle?: string;
  slug: { current: string };
  mainImage?: any;
  categories?: string[];
  publishedAt: string;
}

interface HomeClientProps {
  recentArticle?: Article | null;
  topArticles?: Article[];
  allArticles?: Article[];
}

// Fallback Data
const DUMMY_ARTICLE: Article = {
  _id: "dummy-1",
  title: "The Art of Fermentation",
  subtitle: "시간이 빚어내는 미각의 깊이에 대하여",
  slug: { current: "art-of-fermentation" },
  mainImage: {
    asset: {
      url: "https://images.unsplash.com/photo-1542129202-e2c72b216124?q=80&w=2692&auto=format&fit=crop"
    }
  },
  categories: ["Essay"],
  publishedAt: new Date().toISOString()
};

const DUMMY_TOP_ARTICLES: Article[] = [
  {
    _id: "dummy-2",
    title: "Seoul's Hidden Gems",
    subtitle: "골목길에 숨겨진 미식의 보물창고",
    slug: { current: "seoul-hidden-gems" },
    mainImage: {
      asset: { url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2940&auto=format&fit=crop" }
    },
    categories: ["Guide"],
    publishedAt: new Date().toISOString()
  },
  {
    _id: "dummy-3",
    title: "Chef's Table: Mingles",
    subtitle: "강민구 셰프가 말하는 한식의 미래",
    slug: { current: "chefs-table-mingles" },
    mainImage: {
      asset: { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop" }
    },
    categories: ["Interview"],
    publishedAt: new Date().toISOString()
  },
  {
    _id: "dummy-4",
    title: "Modern Dining Trends",
    subtitle: "2024년 파인 다이닝의 새로운 흐름",
    slug: { current: "modern-dining-trends" },
    mainImage: {
      asset: { url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop" }
    },
    categories: ["Trend"],
    publishedAt: new Date().toISOString()
  }
];

export default function HomeClient({ 
  recentArticle = null, 
  topArticles = [], 
  allArticles = [] 
}: HomeClientProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Use dummy data if no real data
  const mainArticle = recentArticle || DUMMY_ARTICLE;
  const topPicks = topArticles.length > 0 ? topArticles : DUMMY_TOP_ARTICLES;
  const storyList = allArticles.length > 0 ? allArticles : DUMMY_TOP_ARTICLES; 

  const getImageUrl = (image: any) => {
    if (!image) return "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop";
    if (image.asset?.url) return image.asset.url;
    return urlFor(image).width(1600).url();
  };

  return (
    <div ref={containerRef} className="bg-[#F2F1ED] min-h-screen selection:bg-black selection:text-[#F2F1ED]">
      <Header />

      <main>
        {/* 1. Intro Hero Section: Abstract Art Motion (Original) */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F2F1ED]">
          
          {/* Abstract Liquid Shape */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="relative w-[40vw] h-[40vw] min-w-[300px] min-h-[300px]">
               <svg className="absolute w-0 h-0">
                 <filter id="liquid-filter">
                   <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="warp">
                     <animate attributeName="baseFrequency" dur="20s" values="0.01;0.005;0.01" repeatCount="indefinite" />
                   </feTurbulence>
                   <feDisplacementMap in="SourceGraphic" in2="warp" scale="60" xChannelSelector="R" yChannelSelector="G" />
                 </filter>
               </svg>
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="w-full h-full bg-black rounded-full opacity-90 mix-blend-multiply blur-3xl"
                 style={{ filter: "url(#liquid-filter)" }}
               />
               
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
                Since — 2022
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


        {/* 2. Latest Feature (Full Width Image) */}
        <section className="relative w-full h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={getImageUrl(mainArticle.mainImage)}
              alt={mainArticle.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="text-white max-w-4xl">
              <span className="font-sans text-xs tracking-[0.3em] uppercase border border-white/40 px-4 py-2 mb-8 inline-block backdrop-blur-sm">
                Latest Story
              </span>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                {mainArticle.title}
              </h2>
              <a 
                href={`/article/${mainArticle.slug.current}`}
                className="inline-flex items-center gap-2 font-serif text-xl border-b border-white/50 pb-1 hover:border-white transition-colors"
              >
                Read Article <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>


        {/* 3. Top Picks (Grid) */}
        <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-[#F2F1ED]">
          <div className="flex items-end justify-between mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-black">Top Picks</h2>
            <div className="hidden md:block w-full max-w-xs h-[1px] bg-black/10 mb-4 ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {topPicks.map((article, idx) => (
              <motion.div 
                key={article._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-gray-200">
                  <Image
                    src={getImageUrl(article.mainImage)}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-black">
                      {article.categories?.[0] || 'Story'}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:italic transition-all">
                  {article.title}
                </h3>
                <p className="font-serif text-black/60 line-clamp-2 leading-relaxed">
                  {article.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* 4. All Stories (List) */}
        <section className="py-20 px-6 md:px-12 bg-white border-t border-black/5">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-black/40 mb-16">All Stories</h2>

            <div className="divide-y divide-black/10 border-t border-black/10 border-b">
              {storyList.map((article) => (
                <article 
                  key={article._id}
                  className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-gray-50 transition-colors px-4 -mx-4 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                    <span className="font-sans text-xs tracking-widest text-black/40 w-24">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-brand-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-serif text-black/60">
                        {article.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-sans text-[10px] tracking-widest uppercase">Read</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-20 text-center">
              <button className="font-sans text-xs tracking-[0.2em] uppercase border border-black/20 px-8 py-4 hover:bg-black hover:text-white transition-all">
                Load More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
