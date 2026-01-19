import { Block } from "payload";

const Testimonial: Block = {
  slug: "testimonial",
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
  ],
};

export default Testimonial;
