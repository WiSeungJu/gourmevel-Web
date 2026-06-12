"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { urlFor } from "@/sanity/lib/image";
import { ArrowUpRight, Instagram } from "lucide-react";

// Types
interface Article {
  _id: string;
  title: string;
  subtitle?: string;
  slug: { current: string };
  mainImage?: any;
  categories?: string[];
  publishedAt: string;
  externalUrl?: string;
}

interface InstaPost {
  _id: string;
  caption?: string;
  permalink: string;
  image?: any;
  postedAt?: string;
}

interface HomeClientProps {
  recentArticle?: Article | null;
  topArticles?: Article[];
  allArticles?: Article[];
  instaPosts?: InstaPost[];
}

export default function HomeClient({
  recentArticle = null,
  topArticles = [],
  allArticles = [],
  instaPosts = []
}: HomeClientProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const getImageUrl = (image: any) => {
    if (!image) return undefined;
    if (image.asset?.url) return image.asset.url;
    return urlFor(image).width(1600).url();
  };

  // 외부 링크(네이버 원문)가 있으면 외부로, 없으면 웹 아티클로 이동
  const ArticleLink = ({ article, className, children }: { article: Article; className?: string; children: ReactNode }) =>
    article.externalUrl ? (
      <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    ) : (
      <Link href={`/article/${article.slug.current}`} className={className}>
        {children}
      </Link>
    );

  return (
    <div ref={containerRef} className="bg-[#F2F1ED] min-h-screen selection:bg-black selection:text-[#F2F1ED]">
      <Header />

      <main>
        {/* 1. Intro Hero Section: Abstract Art Motion (Original) */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F2F1ED]">
          
          {/* Abstract Liquid Shape */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
             <div className="relative w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] min-w-[280px] min-h-[280px]">
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
        {recentArticle && (
          <section className="relative w-full h-[80vh] overflow-hidden">
            <div className="absolute inset-0">
              {getImageUrl(recentArticle.mainImage) && (
                <Image
                  src={getImageUrl(recentArticle.mainImage)}
                  alt={recentArticle.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-6">
              <div className="text-white max-w-4xl">
                <span className="font-sans text-xs tracking-[0.3em] uppercase border border-white/40 px-4 py-2 mb-8 inline-block backdrop-blur-sm">
                  Latest Story
                </span>
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                  {recentArticle.title}
                </h2>
                <ArticleLink
                  article={recentArticle}
                  className="inline-flex items-center gap-2 font-serif text-xl border-b border-white/50 pb-1 hover:border-white transition-colors"
                >
                  {recentArticle.externalUrl ? '전문 보기 · 네이버' : 'Read Article'} <ArrowUpRight className="w-5 h-5" />
                </ArticleLink>
              </div>
            </div>
          </section>
        )}


        {/* 3. Top Picks (Grid) */}
        {topArticles && topArticles.length > 0 && (
          <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-[#F2F1ED]">
            <div className="flex items-end justify-between mb-20">
              <h2 className="font-display text-4xl md:text-5xl text-black">Top Picks</h2>
              <div className="hidden md:block w-full max-w-xs h-[1px] bg-black/10 mb-4 ml-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
              {topArticles.map((article, idx) => (
                <motion.div 
                  key={article._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <ArticleLink article={article}>
                    <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-brand-stone/40">
                      {getImageUrl(article.mainImage) && (
                        <Image
                          src={getImageUrl(article.mainImage)}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                        />
                      )}
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
                  </ArticleLink>
                </motion.div>
              ))}
            </div>
          </section>
        )}


        {/* 4. All Stories (List) */}
        {allArticles && allArticles.length > 0 && (
          <section className="py-20 px-6 md:px-12 bg-white border-t border-black/5">
            <div className="max-w-screen-2xl mx-auto">
              <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-black/40 mb-16">All Stories</h2>

              <div className="divide-y divide-black/10 border-t border-black/10 border-b">
                {allArticles.map((article) => (
                  <ArticleLink
                    key={article._id}
                    article={article}
                    className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-gray-50 transition-colors px-4 -mx-4 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                      <span className="font-sans text-xs tracking-widest text-black/40 w-24">
                        {new Date(article.publishedAt).toLocaleDateString('ko-KR')}
                      </span>
                      <div>
                        <h3 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-brand-secondary transition-colors">
                          {article.title}
                        </h3>
                        <p className="font-serif text-black/60">
                          {article.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-sans text-[10px] tracking-widest uppercase">
                        {article.externalUrl ? '네이버' : 'Read'}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </ArticleLink>
                ))}
              </div>

              <div className="mt-20 text-center">
                <button className="font-sans text-xs tracking-[0.2em] uppercase border border-black/20 px-8 py-4 hover:bg-black hover:text-white transition-all">
                  Load More
                </button>
              </div>
            </div>
          </section>
        )}


        {/* 5. Instagram (Curated) */}
        {instaPosts && instaPosts.length > 0 && (
          <section className="py-28 md:py-36 px-6 md:px-12 bg-[#F2F1ED] border-t border-black/5">
            <div className="max-w-screen-2xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-black/40 block mb-4">
                    Daily Cuts
                  </span>
                  <h2 className="font-display text-4xl md:text-6xl">@gourmevel</h2>
                </div>
                <a
                  href="https://www.instagram.com/gourmevel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-black/50 hover:text-brand-secondary transition-colors"
                >
                  <Instagram className="w-4 h-4" /> Follow on Instagram
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                {instaPosts.map((post, idx) => (
                  <motion.a
                    key={post._id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 4) * 0.06 }}
                    className="group relative aspect-square overflow-hidden bg-brand-stone/40"
                  >
                    {getImageUrl(post.image) && (
                      <Image
                        src={getImageUrl(post.image)}
                        alt={post.caption || "Gourmevel Instagram"}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center p-4">
                      <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {post.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="font-serif text-xs text-white line-clamp-2 leading-relaxed drop-shadow">
                          {post.caption}
                        </p>
                      </div>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
