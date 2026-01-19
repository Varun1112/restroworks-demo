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

export type ContactFormBlock = {
  blockType: "contact-form-config";
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitButtonText: string;
  submittingButtonText: string;
  successMessage: string;
  errorMessage: string;
};

export type PageBlock =
  | HeroBlock
  | FeatureBlock
  | TestimonialBlock
  | CTABlock
  | ContactFormBlock;
