/* eslint-disable @next/next/no-img-element */
"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { urlFor } from "@/sanity/lib/image";
import { NaverPost, NaverCategory, NAVER_BLOG_URL } from "@/sanity/lib/naver";

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

interface ReviewsClientProps {
  featured?: Article[];
  naverPosts?: NaverPost[];
  naverCategories?: NaverCategory[];
}

export default function ReviewsClient({
  featured = [],
  naverPosts = [],
  naverCategories = [],
}: ReviewsClientProps) {
  // 못 불러온 썸네일은 타이포 카드로 대체
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const markFailed = (id: string) => setFailed((prev) => new Set(prev).add(id));

  // 선택된 카테고리(null = 전체). 실제 글이 존재하는 카테고리만 필터로 노출.
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const usedCategoryNos = new Set(
    naverPosts.map((p) => p.categoryNo).filter((n): n is number => typeof n === "number")
  );
  const categories = naverCategories.filter((c) => usedCategoryNos.has(c.categoryNo));

  const getImageUrl = (image: any) => {
    if (!image) return undefined;
    if (image.asset?.url) return image.asset.url;
    return urlFor(image).width(1200).url();
  };

  // 대표글에 이미 외부링크로 건 네이버 글은 자동 목록에서 제외 (중복 방지)
  const featuredLinks = new Set(featured.map((a) => a.externalUrl).filter(Boolean));
  const posts = naverPosts
    .filter((p) => !featuredLinks.has(p.link))
    .filter((p) => activeCategory === null || p.categoryNo === activeCategory);

  const fmtNaverDate = (d: string) => {
    if (!d) return "";
    const t = new Date(d);
    return isNaN(t.getTime()) ? "" : t.toLocaleDateString("ko-KR");
  };

  const FeaturedLink = ({ article, className, children }: { article: Article; className?: string; children: ReactNode }) =>
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
    <div className="min-h-screen bg-brand-paper text-brand-primary selection:bg-brand-primary selection:text-brand-paper">
      <Header />

      <main>
        {/* Intro */}
        <section className="pt-44 pb-16 px-6 md:px-12 border-b border-brand-primary/10">
          <div className="max-w-screen-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-primary/40 block mb-8"
            >
              Dining Journal
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-5xl md:text-8xl leading-[0.95]"
            >
              Reviews
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-lg md:text-2xl text-brand-primary/60 max-w-3xl leading-relaxed mt-10"
            >
              엄선된 다이닝 공간에서의 미식 경험. 대표 리뷰는 이곳에서 무드와 함께,
              심도 있는 전문은 네이버 블로그에서 만나보실 수 있습니다.
            </motion.p>
          </div>
        </section>

        {/* Featured (Sanity 대표글) */}
        {featured.length > 0 && (
          <section className="px-6 md:px-12 pt-20 md:pt-28">
            <div className="max-w-screen-2xl mx-auto">
              <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-primary/40 mb-12">
                Featured
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {featured.map((article, idx) => (
                  <motion.article
                    key={article._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <FeaturedLink article={article}>
                      <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-brand-stone/40">
                        {getImageUrl(article.mainImage) && (
                          <Image
                            src={getImageUrl(article.mainImage)}
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                          />
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-4 border-t border-brand-primary/10 pt-4">
                        <span className="font-sans text-[10px] tracking-widest uppercase text-brand-primary/40">
                          {new Date(article.publishedAt).toLocaleDateString("ko-KR")}
                        </span>
                        <span className="font-sans text-[10px] tracking-widest uppercase text-brand-primary/40">
                          Review
                        </span>
                      </div>

                      <h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-brand-secondary transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-serif text-brand-primary/60 line-clamp-2 leading-relaxed mb-6">
                        {article.subtitle}
                      </p>

                      <div className="flex items-center gap-2 text-brand-primary/40 group-hover:text-brand-secondary transition-colors">
                        <span className="font-sans text-[10px] tracking-widest uppercase">
                          {article.externalUrl ? "전문 보기 · 네이버" : "Read Review"}
                        </span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </FeaturedLink>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Naver Journal (RSS 자동) */}
        <section className="px-6 md:px-12 pt-20 md:pt-28 pb-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-primary/40">
                From the Naver Journal
              </h2>
              <a
                href={NAVER_BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-primary/50 hover:text-brand-secondary transition-colors inline-flex items-center gap-1.5"
              >
                블로그 전체 보기 <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 카테고리 필터 (게시판) */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-12 -mt-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-colors ${
                    activeCategory === null
                      ? "text-brand-secondary"
                      : "text-brand-primary/40 hover:text-brand-primary"
                  }`}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.categoryNo}
                    onClick={() => setActiveCategory(c.categoryNo)}
                    className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-colors ${
                      activeCategory === c.categoryNo
                        ? "text-brand-secondary"
                        : "text-brand-primary/40 hover:text-brand-primary"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {posts.map((post, idx) => (
                  <motion.a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] mb-5 overflow-hidden bg-brand-stone/40">
                      {post.thumbnail && !failed.has(post.id) ? (
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() => markFailed(post.id)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-6 text-center">
                          <span className="font-display text-2xl text-brand-primary/25 italic">Gourmevel</span>
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-primary/25">Naver Journal</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="font-sans text-[10px] tracking-widest uppercase text-brand-primary/40">
                        {fmtNaverDate(post.pubDate)}
                      </span>
                      <span className="font-sans text-[10px] tracking-widest uppercase text-brand-secondary/70">
                        Naver
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl leading-snug mb-2 group-hover:text-brand-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="font-serif text-sm text-brand-primary/50 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                  </motion.a>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center border-t border-b border-brand-primary/10">
                <p className="font-serif text-lg text-brand-primary/50 italic mb-6">
                  네이버 블로그에서 최신 다이닝 리뷰를 확인해보세요.
                </p>
                <a
                  href={NAVER_BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase border border-brand-primary/20 px-8 py-4 hover:bg-brand-primary hover:text-brand-paper transition-all"
                >
                  네이버 블로그 방문 <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
