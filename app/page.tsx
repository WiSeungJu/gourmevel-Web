import { client } from "@/sanity/lib/client";
import { projectId } from "@/sanity/env";
import HomeClient from "@/components/home/HomeClient";

// Revalidate data every hour
export const revalidate = 3600;

export default async function Home() {
  let restaurants = [];

  if (projectId) {
    try {
      // GROQ query
      const query = `*[_type == "restaurant"] | order(displayId asc) {
        _id,
        displayId,
        name,
        location,
        description,
        mainImage
      }`;
      restaurants = await client.fetch(query);
    } catch (error) {
      console.warn("Failed to fetch data from Sanity:", error);
    }
  }

  return <HomeClient restaurants={restaurants} />;
}
