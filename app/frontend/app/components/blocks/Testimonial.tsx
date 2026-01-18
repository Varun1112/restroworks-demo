import { TestimonialBlock } from "../../types/blocks";

type Props = {
  data: TestimonialBlock;
};

export default function Testimonial({ data }: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <blockquote className="text-xl italic text-gray-700">
          “{data.quote}”
        </blockquote>

        <p className="mt-4 font-semibold text-gray-900">
          — {data.author}
        </p>
      </div>
    </section>
  );
}
