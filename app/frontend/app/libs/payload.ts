import { PageBlock } from "../types/blocks";

export type SEO = {
  title: string;
  description?: string;
};

export type HomepageData = {
  seo: SEO;
  blocks: PageBlock[];
};

const CMS_URL =
  process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";

export async function fetchHomepage(
  locale: string
): Promise<HomepageData> {
  const url = `${CMS_URL}/api/globals/homepage?locale=${locale}`;
  
  try {
    const res = await fetch(url, {
      // ISR: revalidate every 60s
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(
        `Failed to fetch homepage from CMS. Status: ${res.status}. URL: ${url}. Response: ${text}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
