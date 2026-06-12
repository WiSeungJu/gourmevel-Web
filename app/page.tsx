import { client } from "@/sanity/lib/client";
import { projectId } from "@/sanity/env";
import HomeClient from "@/components/home/HomeClient";

// Revalidate data every hour
export const revalidate = 3600;

export default async function Home() {
  let recentArticle = null;
  let topArticles = [];
  let allArticles = [];
  let instaPosts = [];

  if (projectId) {
    try {
      // 1. Recent Article (가장 최신 1개)
      const recentQuery = `*[_type == "article"] | order(publishedAt desc)[0] {
        _id,
        title,
        subtitle,
        slug,
        mainImage,
        categories,
        publishedAt,
        externalUrl
      }`;
      recentArticle = await client.fetch(recentQuery);

      // 2. Top Articles (isTop 체크된 것 중 3개, Recent와 중복 제외)
      // Recent가 있으면 해당 ID 제외하고 쿼리
      const excludeId = recentArticle?._id ? `&& _id != "${recentArticle._id}"` : "";
      
      const topQuery = `*[_type == "article" && isTop == true ${excludeId}] | order(publishedAt desc)[0...3] {
        _id,
        title,
        subtitle,
        slug,
        mainImage,
        categories,
        publishedAt,
        externalUrl
      }`;
      topArticles = await client.fetch(topQuery);

      // 3. All Articles (나머지, Recent와 Top에 포함된 것 제외)
      // Top Articles ID들도 제외 목록에 추가
      const topIds = topArticles.map((a: any) => a._id);
      const excludeIds = recentArticle ? [recentArticle._id, ...topIds] : [...topIds];
      const excludeFilter = excludeIds.length > 0 ? `&& !(_id in [${excludeIds.map((id: string) => `"${id}"`).join(',')}])` : "";

      const allQuery = `*[_type == "article" ${excludeFilter}] | order(publishedAt desc)[0...10] {
        _id,
        title,
        subtitle,
        slug,
        mainImage,
        categories,
        publishedAt,
        externalUrl
      }`;
      allArticles = await client.fetch(allQuery);

      // 4. Instagram (큐레이션, 최신 8개)
      const instaQuery = `*[_type == "instagramPost"] | order(postedAt desc)[0...8] {
        _id,
        caption,
        permalink,
        image,
        postedAt
      }`;
      instaPosts = await client.fetch(instaQuery);

    } catch (error) {
      console.warn("Failed to fetch data from Sanity:", error);
    }
  }

  return (
    <HomeClient
      recentArticle={recentArticle}
      topArticles={topArticles}
      allArticles={allArticles}
      instaPosts={instaPosts}
    />
  );
}
