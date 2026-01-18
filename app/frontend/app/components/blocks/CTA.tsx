import { CTABlock } from "../../types/blocks";
import Link from "next/link";

type Props = {
  data: CTABlock;
};

export default function CTA({ data }: Props) {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">{data.text}</h2>

        <div className="mt-6">
          <Link
            href={data.link}
            className="inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
