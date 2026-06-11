import { createFileRoute } from "@tanstack/react-router";
import { GALLERY, IMG } from "@/lib/ascend";
import { Eyebrow } from "@/components/section-heading";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside Ascend Fitness, Rajajinagar Bengaluru" },
      { name: "description", content: "Take a look inside Ascend Fitness — premium strength floor, cardio line and atmosphere in Rajajinagar, Bengaluru." },
      { property: "og:title", content: "Gallery — Ascend Fitness Rajajinagar" },
      { property: "og:description", content: "Inside the premium gym in Rajajinagar, Bengaluru." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: IMG.floor },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="container-x pb-12 pt-24 md:pt-32">
        <Eyebrow>Gallery</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-black leading-[0.95] md:text-7xl">
          Inside <span className="gold-gradient">Ascend.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          A look at the floor, the equipment and the atmosphere we've built in Rajajinagar.
        </p>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/3]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading={i < 2 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-xs font-medium text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
