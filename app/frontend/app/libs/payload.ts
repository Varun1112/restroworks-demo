import { PageBlock } from "../types/blocks";

export type SEO = {
  title: string;
  description: string;
};

export type HomepageData = {
  seo: SEO;
  blocks: PageBlock[];
};

export async function fetchHomepage(
  locale: string
): Promise<HomepageData> {
  return {
    seo: {
      title:
        locale === "en"
          ? "Restroworks – Restaurant Growth Platform"
          : "Restroworks – Plataforma de Crecimiento",
      description:
        locale === "en"
          ? "Powering modern restaurants with technology."
          : "Impulsando restaurantes modernos con tecnología.",
    },
    blocks: [
      {
        blockType: "hero",
        heading:
          locale === "en" ? "Grow Your Restaurant" : "Haz Crecer Tu Restaurante",
        subheading: "Built with Next.js and Payload CMS",
      },
    ],
  };
}
