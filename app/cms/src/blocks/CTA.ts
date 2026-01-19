import { Block } from "payload";

const CTA: Block = {
  slug: "cta",
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
  ],
};

export default CTA;
