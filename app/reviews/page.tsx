import { client } from "@/sanity/lib/client";
import { projectId } from "@/sanity/env";
import { fetchAllNaverPosts, fetchNaverCategories } from "@/sanity/lib/naver";
import ReviewsClient from "@/components/reviews/ReviewsClient";

// Revalidate every hour (Sanity 대표글 + 네이버 RSS 모두 1시간 캐시)
export const revalidate = 3600;

export default async function ReviewsPage() {
  let featured = [];

  if (projectId) {
    try {
      const query = `*[_type == "article" && categories match "review"] | order(publishedAt desc) {
        _id,
        title,
        subtitle,
        slug,
        mainImage,
        categories,
        publishedAt,
        externalUrl
      }`;
      featured = await client.fetch(query);
    } catch (error) {
      console.warn("Failed to fetch reviews from Sanity:", error);
    }
  }

  const [naverPosts, naverCategories] = await Promise.all([
    fetchAllNaverPosts(),
    fetchNaverCategories(),
  ]);

  return (
    <ReviewsClient
      featured={featured}
      naverPosts={naverPosts}
      naverCategories={naverCategories}
    />
  );
}
