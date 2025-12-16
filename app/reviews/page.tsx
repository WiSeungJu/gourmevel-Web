import { client } from "@/sanity/lib/client";
import ArticleList from "@/components/article/ArticleList";

// Revalidate every hour
export const revalidate = 3600;

export default async function ReviewsPage() {
  const query = `*[_type == "article" && categories match "Review"] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    slug,
    mainImage,
    categories,
    publishedAt
  }`;

  const articles = await client.fetch(query);

  return (
    <ArticleList 
      title="Reviews" 
      description="엄선된 다이닝 공간에서의 미식 경험을 상세한 리뷰와 함께 소개합니다."
      articles={articles}
    />
  );
}

