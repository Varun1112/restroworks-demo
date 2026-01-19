import { fetchHomepage } from "@/app/libs/payload";
import ContactForm from "../../components/ContactForm";
import { ContactFormBlock } from "../../types/blocks";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEnglish = locale === "en";
  const data = await fetchHomepage(locale);

  // Find the contact form config block
  const contactFormBlock = data.blocks.find(
    (block): block is ContactFormBlock => block.blockType === "contact-form-config"
  );

  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">
        {isEnglish ? "Contact Us" : "Contáctanos"}
      </h1>

      <p className="text-gray-600 mb-8">
        {isEnglish
          ? "Have questions? Fill out the form below and we’ll get back to you."
          : "¿Tienes preguntas? Completa el formulario y nos pondremos en contacto contigo."}
      </p>

      <ContactForm config={contactFormBlock} />
    </section>
  );
}
