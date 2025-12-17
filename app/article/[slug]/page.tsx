import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleContent from "@/components/article/ArticleContent";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 3600;

// Params 타입 정의
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  // Sanity Query
  const query = `*[_type == "article" && slug.current == "${slug}"][0] {
    _id,
    title,
    subtitle,
    mainImage,
    categories,
    publishedAt,
    categories,
    publishedAt,
    content,
    author
  }`;

  const article = await client.fetch(query);

  // 더미 데이터 (데이터가 없을 경우 보여줄 예시)
  const dummyArticle = {
    title: "The Art of Fermentation",
    subtitle: "시간이 빚어내는 미각의 깊이에 대하여",
    categories: ["Essay"],
    publishedAt: "2024-03-15T09:00:00.000Z",
    author: "Gourmevel",
    mainImage: null, // Image 컴포넌트에서 처리
    content: [ // 새로운 구조의 더미 데이터
      {
        _key: "1",
        layout: "top",
        text: [
          {
            _type: "block",
            style: "normal",
            children: [{ _type: "span", text: "진정한 맛은 시간 속에서 완성됩니다. 우리는 종종 빠름을 미덕으로 여기는 세상에 살고 있지만, 미식의 세계에서만큼은 기다림이 곧 예술이 되기도 합니다." }]
          }
        ]
      },
      {
        _key: "2",
        layout: "top",
        text: [
           {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "기다림의 미학" }]
          },
          {
            _type: "block",
            style: "normal",
            children: [{ _type: "span", text: "발효는 단순히 식재료를 보존하는 기술을 넘어, 새로운 차원의 맛을 창조하는 과정입니다." }]
          }
        ]
      }
    ]
  };

  // 실제 데이터가 없으면 더미 데이터 사용 (개발 중 편의를 위해)
  // 실제 배포 시에는 if (!article) return notFound(); 로 변경 권장
  const data = article || (slug.includes("dummy") || slug.includes("art") ? dummyArticle : null);

  if (!data) return notFound();

  const getImageUrl = (image: any) => {
    if (!image) return "https://images.unsplash.com/photo-1542129202-e2c72b216124?q=80&w=2692&auto=format&fit=crop";
    if (image.asset?.url) return image.asset.url;
    return urlFor(image).width(1920).url();
  };

  return (
    <div className="min-h-screen bg-[#F2F1ED] selection:bg-brand-primary selection:text-brand-secondary">
      <Header />

      <main>
        {/* Hero Section */}
        <header className="relative w-full h-[70vh] md:h-[80vh] flex items-end">
          <div className="absolute inset-0">
             <Image
                src={getImageUrl(data.mainImage)}
                alt={data.title}
                fill
                className="object-cover brightness-[0.7]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 pb-20 md:pb-32 text-white">
            <div className="flex items-center gap-4 mb-8 opacity-80">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase border border-white/40 px-3 py-1 backdrop-blur-sm">
                {data.categories?.[0] || "Story"}
              </span>
              <div className="h-[1px] w-8 bg-white/40" />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase">
                {new Date(data.publishedAt).toLocaleDateString()}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-4xl">
              {data.title}
            </h1>
            
            {data.subtitle && (
              <p className="font-serif text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                {data.subtitle}
              </p>
            )}
          </div>
        </header>

        {/* Article Body */}
        <article className="max-w-screen-md mx-auto px-6 py-24 md:py-32">
          {/* Author Info */}
          <div className="flex justify-between items-end border-b border-black/10 pb-12 mb-20">
             <div className="flex flex-col gap-2">
               <span className="font-sans text-[10px] tracking-widest uppercase text-black/40">Written by</span>
               <span className="font-display text-xl text-black">{data.author || "Gourmevel Editor"}</span>
             </div>
             <div className="flex gap-4">
               {/* Share Buttons could go here */}
             </div>
          </div>

          {/* Content */}
          <ArticleContent content={data.content || data.body} />
          
          {/* Article Footer */}
          <div className="mt-32 pt-12 border-t border-black/10 text-center">
             <p className="font-serif italic text-black/40 text-lg mb-8">Thanks for reading.</p>
             <a href="/stories" className="font-sans text-xs tracking-[0.2em] uppercase border border-black/20 px-8 py-4 hover:bg-black hover:text-white transition-all">
               Back to Stories
             </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

