import { HeroBlock } from "../../types/blocks";

type Props = {
  data: HeroBlock;
};

export default function Hero({ data }: Props) {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold">{data.heading}</h1>
      {data.subheading && (
        <p className="mt-4 text-gray-600">{data.subheading}</p>
      )}
    </section>
  );
}
