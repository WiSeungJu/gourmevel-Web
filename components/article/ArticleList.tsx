"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { urlFor } from "@/sanity/lib/image";

interface Article {
  _id: string;
  title: string;
  subtitle?: string;
  slug: { current: string };
  mainImage?: any;
  categories?: string[];
  publishedAt: string;
}

interface ArticleListProps {
  title: string;
  description: string;
  articles: Article[];
}

export default function ArticleList({ title, description, articles }: ArticleListProps) {
  const getImageUrl = (image: any) => {
    if (!image) return "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop";
    if (image.asset?.url) return image.asset.url;
    return urlFor(image).width(800).url();
  };

  return (
    <div className="min-h-screen bg-brand-beige selection:bg-brand-primary selection:text-brand-secondary">
      <Header />

      <main className="pt-40 pb-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          {/* Page Header */}
          <div className="mb-32 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-8xl text-brand-primary mb-6"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-xl md:text-2xl text-brand-primary/60 max-w-4xl leading-relaxed whitespace-pre-wrap"
            >
              {description}
            </motion.p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {articles.length > 0 ? (
              articles.map((article, idx) => (
                <motion.article 
                  key={article._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/article/${article.slug.current}`}>
                    <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-gray-200">
                      <Image
                        src={getImageUrl(article.mainImage)}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-4 border-t border-brand-primary/10 pt-4">
                      <span className="font-sans text-[10px] tracking-widest uppercase text-brand-primary/40">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                      <span className="font-sans text-[10px] tracking-widest uppercase text-brand-primary/40">
                        {article.categories?.[0]}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-brand-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="font-serif text-brand-primary/60 line-clamp-2 leading-relaxed mb-6">
                      {article.subtitle}
                    </p>

                    <div className="flex items-center gap-2 text-brand-primary/40 group-hover:text-brand-primary transition-colors">
                      <span className="font-sans text-[10px] tracking-widest uppercase">Read Story</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border-t border-b border-brand-primary/10">
                <p className="font-serif text-xl text-brand-primary/40 italic">
                  아직 등록된 글이 없습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

