import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, BIZ } from "@/lib/ascend";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ascend Fitness | Premium Gym in Rajajinagar, Bengaluru" },
      { name: "description", content: "Discover the story, philosophy and discipline behind Ascend Fitness — a results-driven premium gym in Rajajinagar, Bengaluru." },
      { property: "og:title", content: "About Ascend Fitness" },
      { property: "og:description", content: "Story, philosophy and discipline behind a premium gym in Rajajinagar." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: IMG.mural },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={IMG.mural} alt="Ascend Fitness brand mural inside the Rajajinagar gym" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="container-x pb-16 pt-28 md:pb-24 md:pt-36">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-black leading-[0.95] md:text-7xl">
            Built on <span className="gold-gradient">discipline</span>.<br className="hidden md:block" /> Driven by results.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Ascend Fitness was built for people who take their training seriously. No mirrors-and-selfies
            culture — just clean iron, smart programming and coaches who care.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <SectionHeading eyebrow="Our story" title={<>A premium gym, <span className="gold-gradient">in your neighbourhood.</span></>} />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              We opened Ascend in Rajajinagar to give Bengaluru a gym that actually feels premium —
              one floor above Tata Motors on 10th Cross Road, designed end-to-end for serious training.
            </p>
            <p>
              From the day we opened, members have told us the same thing: it's clean, it's focused,
              and the coaching is real. That's exactly the standard we work to hold every single day.
            </p>
            <p>
              Whether your goal is your first pull-up or your first 100 kg deadlift, we'll build the
              plan with you and stand next to you while you do it.
            </p>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-white/10">
          <img src={IMG.floor} alt="Strength training floor at Ascend Fitness Rajajinagar" className="aspect-[4/5] w-full object-cover" />
          <figcaption className="bg-card px-5 py-4 text-sm text-muted-foreground">
            The strength floor — premium racks, plates and dumbbells.
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-white/5 bg-card/30 py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <figure className="order-2 overflow-hidden rounded-2xl border border-white/10 md:order-1">
            <img src={IMG.cardio} alt="Cardio line at Ascend Fitness Bengaluru" className="aspect-[4/5] w-full object-cover" />
            <figcaption className="bg-background px-5 py-4 text-sm text-muted-foreground">
              The cardio line — designed for focus.
            </figcaption>
          </figure>
          <div className="order-1 md:order-2">
            <SectionHeading eyebrow="Our philosophy" title={<>Train hard. <span className="gold-gradient">Recover smart.</span> Eat with intent.</>} />
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li><span className="text-foreground font-semibold">Discipline over hype.</span> Consistency beats motivation. We program for the long game.</li>
              <li><span className="text-foreground font-semibold">Coaching, not babysitting.</span> Real coaches, real cues, real progressions.</li>
              <li><span className="text-foreground font-semibold">Premium standards.</span> Clean equipment, clean floors, clean energy. Every day.</li>
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> Book a Trial at {BIZ.phone}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
