import { CollectionConfig } from "payload";

const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "createdAt"],
  },

  access: {
    read: () => true,      // allow admin UI access
    create: () => true,    // allow API form submission
    update: () => false,   // prevent edits
    delete: () => false,   // prevent deletes
  },

  timestamps: true,

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
};

export default ContactSubmissions;
