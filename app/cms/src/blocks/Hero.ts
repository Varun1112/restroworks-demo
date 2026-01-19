import { Block } from "payload";

const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "subheading",
      type: "text",
      localized: true,
    },
  ],
};

export default Hero;
