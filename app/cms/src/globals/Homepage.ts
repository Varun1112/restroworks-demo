import { GlobalConfig } from "payload";
import Hero from "../blocks/Hero";
import Testimonial from "../blocks/Testimonial";
import CTA from "../blocks/CTA";

const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: "seo",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          localized: true,
        },
      ],
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [Hero, Testimonial, CTA],
    },
  ],
};

export default Homepage;
