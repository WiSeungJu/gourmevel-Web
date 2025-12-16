"use client";

import { PortableText, PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// 커스텀 스타일 정의
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-serif text-lg md:text-xl leading-relaxed text-black/80 mb-8 break-keep">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl md:text-4xl text-black mt-16 mb-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl md:text-3xl text-black mt-12 mb-6">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-black pl-6 my-12 italic font-serif text-xl md:text-2xl text-black/60">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full aspect-[16/10] my-12 bg-gray-100">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Article Image"}
            fill
            className="object-cover"
          />
          {value.caption && (
            <p className="absolute -bottom-8 left-0 w-full text-center text-xs text-black/40 font-sans tracking-widest uppercase">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel} 
          className="text-brand-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          {children}
        </a>
      );
    },
  },
};

export default function ArticleContent({ content }: { content: any }) {
  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}

