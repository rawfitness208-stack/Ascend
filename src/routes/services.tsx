import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES, IMG, BIZ } from "@/lib/ascend";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Dumbbell, Flame, HeartPulse, Apple, Trophy, Check, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Personal Training, CrossFit, HIIT, Weight Training | Ascend Fitness Rajajinagar" },
      { name: "description", content: "Personal Training, CrossFit, HIIT classes, Weight Training and Nutrition Consulting at Ascend Fitness, Rajajinagar, Bengaluru." },
      { property: "og:title", content: "Services at Ascend Fitness Rajajinagar" },
      { property: "og:description", content: "Personal Training, CrossFit, HIIT, Weight Training & Nutrition in Rajajinagar." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: IMG.floor },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const ICONS: Record<string, typeof Dumbbell> = {
  "personal-training": Trophy,
  crossfit: Flame,
  hiit: HeartPulse,
  "weight-training": Dumbbell,
  nutrition: Apple,
};

function Services() {
  return (
    <>
      <section className="container-x pb-12 pt-24 md:pt-32">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-black leading-[0.95] md:text-7xl">
          Five disciplines. <span className="gold-gradient">One standard.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Every programme at Ascend is coached by professionals and built around your goal —
          fat loss, strength, conditioning or longevity.
        </p>
      </section>

      <section className="container-x grid gap-5 pb-20 md:grid-cols-2 md:pb-28">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.slug] ?? Dumbbell;
          return (
            <article key={s.slug} className="hover-lift rounded-2xl border border-white/10 bg-card p-7 md:p-9">
              <div className="flex items-start justify-between gap-4">
                <Icon className="h-10 w-10 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Rajajinagar
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-bold md:text-3xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.blurb}</p>
              <div className="mt-5 flex items-start gap-2 rounded-xl border border-white/5 bg-background/40 p-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {s.benefit}
              </div>
            </article>
          );
        })}
      </section>

      <section className="border-t border-white/5 bg-card/30 py-20 md:py-28">
        <div className="container-x flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="Not sure where to start?"
            title={<>Talk to a coach. <span className="gold-gradient">It's free.</span></>}
            sub="We'll recommend the right programme for your goal, schedule and experience."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={BIZ.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">
              <MessageCircle className="h-4 w-4" /> WhatsApp a Coach
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold">
              Visit the gym
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
