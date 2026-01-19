import { Block } from "payload";

const ContactFormConfig: Block = {
  slug: "contact-form-config",
  fields: [
    {
      name: "nameLabel",
      type: "text",
      required: true,
      localized: true,
      defaultValue: "Your Name",
    },
    {
      name: "emailLabel",
      type: "text",
      required: true,
      localized: true,
      defaultValue: "Your Email",
    },
    {
      name: "messageLabel",
      type: "text",
      required: true,
      localized: true,
      defaultValue: "Your Message",
    },
    {
      name: "submitButtonText",
      type: "text",
      required: true,
      localized: true,
      defaultValue: "Send Message",
    },
    {
      name: "submittingButtonText",
      type: "text",
      required: true,
      localized: true,
      defaultValue: "Sending...",
    },
    {
      name: "successMessage",
      type: "textarea",
      required: true,
      localized: true,
      defaultValue: "Thanks for contacting us! We'll be in touch soon.",
    },
    {
      name: "errorMessage",
      type: "textarea",
      required: true,
      localized: true,
      defaultValue: "Something went wrong. Please try again.",
    },
  ],
};

export default ContactFormConfig;
