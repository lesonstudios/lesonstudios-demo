import Image from "next/image";

export type PortfolioItem = {
  cover: string;  // path under /public or full URL
  title_vi: string;
  title_en: string;
  tag_vi: string;
  tag_en: string;
};

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((p, i) => (
        <div key={i} className="group relative overflow-hidden rounded-3xl ring-1 ring-white/5">
          {/* Using img for simplicity to work with external URLs too */}
          <img src={p.cover} alt={p.title_vi} className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <div className="text-xs text-neutral-300">{p.tag_vi} / {p.tag_en}</div>
            <div className="font-medium">{p.title_vi} / {p.title_en}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
