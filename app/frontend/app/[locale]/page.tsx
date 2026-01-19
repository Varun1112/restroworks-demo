import { fetchHomepage } from "../libs/payload";
import Hero from "../components/blocks/Hero";
import Testimonial from "../components/blocks/Testimonial";
import CTA from "../components/blocks/CTA";
import { PageBlock } from "../types/blocks";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await fetchHomepage(locale);

  return (
    <>
      {data.blocks.map((block: PageBlock, index: number) => {
        switch (block.blockType) {
          case "hero":
            return <Hero key={index} data={block} />;

          case "testimonial":
            return <Testimonial key={index} data={block} />;

          case "cta":
            return <CTA key={index} data={block} />;

          default:
            return null;
        }
      })}
    </>
  );
}