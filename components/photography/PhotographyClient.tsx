"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { urlFor } from "@/sanity/lib/image";

interface Photo {
  _id: string;
  place?: string;
  caption?: string;
  category?: string;
  orientation?: "portrait" | "landscape" | "square";
  isFeatured?: boolean;
  image?: any;
  // 로컬 폴백용
  src?: string;
}

interface PhotographyClientProps {
  photos?: Photo[];
}

// Sanity 데이터가 아직 없을 때 보여줄 폴백 (보유 이미지)
const FALLBACK: Photo[] = [
  { _id: "f1", place: "The Taste", caption: "접시 위의 철학", category: "food", orientation: "portrait", src: "/Dining.jpg" },
  { _id: "f2", place: "The Atmosphere", caption: "공간이 건네는 위로", category: "space", orientation: "landscape", src: "/place.jpg" },
  { _id: "f3", place: "Mood of the Moment", caption: "현장에서만 느낄 수 있는 공기", category: "mood", orientation: "portrait", src: "/Photograpy.jpg" },
  { _id: "f4", place: "Content", caption: "브랜드의 본질을 시각화", category: "food", orientation: "landscape", src: "/Content.JPG" },
];

export default function PhotographyClient({ photos = [] }: PhotographyClientProps) {
  const [active, setActive] = useState<Photo | null>(null);

  const items = photos.length > 0 ? photos : FALLBACK;

  const getImageUrl = (p: Photo, width = 1200) => {
    if (p.src) return p.src;
    if (!p.image) return undefined;
    if (p.image.asset?.url) return p.image.asset.url;
    return urlFor(p.image).width(width).url();
  };

  const aspectFor = (o?: string) =>
    o === "landscape" ? "aspect-[4/3]" : o === "square" ? "aspect-square" : "aspect-[3/4]";

  return (
    <div className="min-h-screen bg-brand-paper text-brand-primary selection:bg-brand-primary selection:text-brand-paper">
      <Header />

      <main>
        {/* Intro — typography led */}
        <section className="pt-44 pb-20 px-6 md:px-12 border-b border-brand-primary/10">
          <div className="max-w-screen-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-primary/40 block mb-8"
            >
              Visual Directing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl"
            >
              The Mood of<br />the Moment
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="font-serif text-lg md:text-2xl text-brand-primary/60 max-w-2xl leading-relaxed mt-10"
            >
              과한 연출 대신, 현장에서만 느낄 수 있는 고유의 아름다움과 공기를
              있는 그대로. 매장과 메뉴가 가진 숨겨진 매력을 시각으로 옮깁니다.
            </motion.p>
          </div>
        </section>

        {/* Gallery — masonry */}
        <section className="px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
              {items.map((p, idx) => {
                const url = getImageUrl(p);
                if (!url) return null;
                return (
                  <motion.figure
                    key={p._id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: (idx % 3) * 0.08 }}
                    onClick={() => setActive(p)}
                    className="group mb-6 md:mb-8 break-inside-avoid cursor-pointer"
                  >
                    <div className={`relative ${aspectFor(p.orientation)} overflow-hidden bg-brand-stone/40`}>
                      <Image
                        src={url}
                        alt={p.place || "Gourmevel photography"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-500" />
                    </div>
                    {(p.place || p.caption) && (
                      <figcaption className="flex items-baseline justify-between gap-4 pt-4">
                        <div>
                          {p.place && (
                            <span className="font-display text-xl md:text-2xl block leading-tight">{p.place}</span>
                          )}
                          {p.caption && (
                            <span className="font-serif text-sm text-brand-primary/50">{p.caption}</span>
                          )}
                        </div>
                        {p.category && (
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-primary/30 shrink-0">
                            {p.category}
                          </span>
                        )}
                      </figcaption>
                    )}
                  </motion.figure>
                );
              })}
            </div>
          </div>
        </section>

        {/* Inquiry CTA — ties to media kit Type C */}
        <section className="bg-brand-primary text-brand-paper px-6 md:px-12 py-28 md:py-40">
          <div className="max-w-screen-xl mx-auto text-center">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-50 block mb-8">
              Photography Service
            </span>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
              브랜드의 무드를<br />담아드립니다
            </h2>
            <p className="font-serif text-lg md:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed mb-14">
              단순 촬영이 아닌 비주얼 디렉팅. 매장·메뉴 촬영부터 시그니처 그레이딩까지,
              고메블의 시선으로 작업합니다. 협업·촬영 문의를 남겨주세요.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase border border-brand-paper/40 px-10 py-5 hover:bg-brand-paper hover:text-brand-primary transition-all duration-300"
            >
              촬영 문의하기
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-brand-primary/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 md:p-12"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-brand-paper/70 hover:text-brand-paper transition-colors"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[70vh]"
            >
              {getImageUrl(active, 2000) && (
                <Image
                  src={getImageUrl(active, 2000)!}
                  alt={active.place || "Gourmevel photography"}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </motion.div>

            {(active.place || active.caption) && (
              <div className="text-center mt-8 text-brand-paper">
                {active.place && <p className="font-display text-2xl">{active.place}</p>}
                {active.caption && <p className="font-serif text-sm opacity-60 mt-1">{active.caption}</p>}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
