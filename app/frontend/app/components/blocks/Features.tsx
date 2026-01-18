import { FeatureBlock } from "../../types/blocks";

type Props = {
  data: FeatureBlock;
};

export default function Features({ data }: Props) {
  return (
    <section className="py-12">
      <ul className="grid gap-4 md:grid-cols-3">
        {data.items.map((item, i) => (
          <li key={i} className="border p-4 rounded">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
