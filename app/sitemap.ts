import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gourmevel.com';

  // 1. 고정된 정적 페이지들
  const staticRoutes = [
    '',
    '/about',
    '/stories',
    '/reviews',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Sanity에서 Article 게시글 동적으로 가져오기
  const query = groq`*[_type == "article" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt
  }`;

  const articles = await client.fetch(query);

  const articleRoutes = articles.map((article: any) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: new Date(article.publishedAt || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
