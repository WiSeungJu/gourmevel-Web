import { client } from "@/sanity/lib/client";
import ArticleList from "@/components/article/ArticleList";

// Revalidate every hour
export const revalidate = 3600;

export default async function StoriesPage() {
  const query = `*[_type == "article" && (categories match "essay" || categories match "interview" || categories match "news" || categories match "magazine")] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    slug,
    mainImage,
    categories,
    publishedAt,
    externalUrl
  }`;

  const articles = await client.fetch(query);

  return (
    <ArticleList 
      title="Stories" 
      description="셰프의 철학, 식문화에 대한 깊이 있는 에세이와 매거진, 그리고 다이닝 씬의 새로운 소식을 전합니다."
      articles={articles}
    />
  );
}

