"use client";

import { useState } from "react";
import { ContactFormBlock } from "../types/blocks";

type Props = {
  config?: ContactFormBlock;
};

export default function ContactForm({ config }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ---- Safe fallbacks (important) ----
  const nameLabel = config?.nameLabel ?? "Your Name";
  const emailLabel = config?.emailLabel ?? "Your Email";
  const messageLabel = config?.messageLabel ?? "Your Message";
  const submitText = config?.submitButtonText ?? "Send Message";
  const submittingText =
    config?.submittingButtonText ?? "Sending...";
  const successMessage =
    config?.successMessage ??
    "Thanks for contacting us! We’ll be in touch soon.";
  const errorMessage =
    config?.errorMessage ??
    "Something went wrong. Please try again.";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/contact-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p className="text-green-600 font-medium">
        {successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        required
        placeholder={nameLabel}
        className="w-full border p-2 rounded"
      />

      <input
        name="email"
        type="email"
        required
        placeholder={emailLabel}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="message"
        required
        placeholder={messageLabel}
        className="w-full border p-2 rounded"
        rows={4}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? submittingText : submitText}
      </button>

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}
