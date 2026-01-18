export type HeroBlock = {
  blockType: "hero";
  heading: string;
  subheading?: string;
};

export type FeatureBlock = {
  blockType: "features";
  items: {
    title: string;
    description: string;
  }[];
};

export type TestimonialBlock = {
  blockType: "testimonial";
  quote: string;
  author: string;
};

export type CTABlock = {
  blockType: "cta";
  text: string;
  link: string;
};

export type PageBlock =
  | HeroBlock
  | FeatureBlock
  | TestimonialBlock
  | CTABlock;
