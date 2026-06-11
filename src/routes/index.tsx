import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Star, MapPin, ArrowRight, Dumbbell, Flame, HeartPulse, Apple, Trophy } from "lucide-react";
import { BIZ, IMG, SERVICES, FAQ, faqSchema } from "@/lib/ascend";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ascend Fitness — Best Premium Gym in Rajajinagar, Bengaluru" },
      { name: "description", content: "Premium gym in Rajajinagar offering Personal Training, CrossFit, HIIT, Weight Training & Nutrition. Rated 5.0 ★. Book a trial today." },
      { property: "og:title", content: "Ascend Fitness — Premium Gym in Rajajinagar" },
      { property: "og:description", content: "Personal Training, CrossFit, HIIT, Weight Training & Nutrition in Rajajinagar, Bengaluru." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Home,
});

const SERVICE_ICONS: Record<string, typeof Dumbbell> = {
  "personal-training": Trophy,
  crossfit: Flame,
  hiit: HeartPulse,
  "weight-training": Dumbbell,
  nutrition: Apple,
};

function Home() {
  return (
    <>
      {/* HERO — full bleed, no right gap */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={IMG.hero}
            alt="Premium gym floor at Ascend Fitness Rajajinagar, Bengaluru"
            className="h-full w-full object-cover object-center md:object-[70%_center]"
            fetchPriority="high"
          />
          {/* Dark overlay — stronger on left for text legibility, fades right */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        <div className="container-x flex min-h-[90vh] flex-col justify-center pb-16 pt-24 md:min-h-screen md:pb-28">
          <div className="max-w-xl">
            <Eyebrow>Rajajinagar · Bengaluru</Eyebrow>
            <h1 className="mt-4 text-balance text-5xl font-black leading-[0.93] tracking-tight md:text-7xl lg:text-8xl">
              Train like<br />you mean it.
              <span className="block gold-gradient mt-1">Ascend.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
              A premium gym in Rajajinagar built for serious results. Personal training, CrossFit,
              HIIT, weight training and nutrition — all under one roof.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BIZ.phoneIntl}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                <Phone className="h-4 w-4" /> Call {BIZ.phone}
              </a>
              <a
                href={BIZ.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" /> Book a Free Trial
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="ml-1 font-semibold">5.0</span>
                <span className="text-muted-foreground">({BIZ.reviews} reviews)</span>
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Rajajinagar, Bengaluru
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/5 bg-card/40">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            ["5.0 ★", "Google Rating"],
            ["5+", "Disciplines"],
            ["Open Daily", "Closes 10 PM"],
            ["1-on-1", "Coaching"],
          ].map(([k, v]) => (
            <div key={v} className="text-center md:text-left">
              <div className="text-2xl font-bold gold-gradient md:text-3xl">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title={<>Premium training, <span className="gold-gradient">zero compromise.</span></>}
          sub="Five disciplines, one philosophy: train with intent, recover with intelligence."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.slug] ?? Dumbbell;
            return (
              <Link
                key={s.slug}
                to="/services"
                className="hover-lift group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 md:p-7"
              >
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ATMOSPHERE / IMAGE BAND */}
      <section className="relative isolate overflow-hidden bg-card/30 py-20 md:py-28">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>The space</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-5xl">
              Built for the work.{" "}
              <span className="gold-gradient">Designed for the focus.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              From the strength floor to the cardio line — every square foot of Ascend is engineered
              to make you train harder. Premium equipment, smart lighting, immaculate space.
            </p>
            <Link
              to="/gallery"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              See the gym <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Two portrait cards side by side — offset for depth */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src={IMG.cardio}
              alt="Strength machines at Ascend Fitness Rajajinagar"
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
            <img
              src={IMG.weights}
              alt="Free weights area at Ascend Fitness"
              className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Reviews"
          align="center"
          title={<>Loved by lifters in <span className="gold-gradient">Rajajinagar</span></>}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { n: "Karthik R.", t: "Best gym I've trained at in Bangalore. Equipment is premium, coaches actually coach." },
            { n: "Priya S.", t: "The HIIT classes are unreal. Lost 6 kg in 3 months with the nutrition plan." },
            { n: "Arjun M.", t: "Clean, focused, no nonsense. Personal training here is worth every rupee." },
          ].map((r) => (
            <div key={r.n} className="rounded-2xl border border-white/10 bg-card p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{r.t}"</p>
              <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {r.n}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-card/30 py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Questions, <span className="gold-gradient">answered.</span></>}
            sub="Everything you need to know before your first session."
          />
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={IMG.mural}
          alt="Ascend Fitness gym floor"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="container-x py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-black leading-[1.05] md:text-6xl">
            Your first session is <span className="gold-gradient">on us.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Walk in. Try a workout. Decide for yourself why Ascend is rated 5.0 in Rajajinagar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BIZ.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={BIZ.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/15"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
