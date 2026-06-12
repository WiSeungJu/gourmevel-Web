import { client } from "@/sanity/lib/client";
import { projectId } from "@/sanity/env";
import PhotographyClient from "@/components/photography/PhotographyClient";

// Revalidate data every hour
export const revalidate = 3600;

export default async function PhotographyPage() {
  let photos = [];

  if (projectId) {
    try {
      const query = `*[_type == "photo"] | order(isFeatured desc, publishedAt desc) {
        _id,
        place,
        caption,
        category,
        orientation,
        isFeatured,
        image
      }`;
      photos = await client.fetch(query);
    } catch (error) {
      console.warn("Failed to fetch photos from Sanity:", error);
    }
  }

  return <PhotographyClient photos={photos} />;
}
