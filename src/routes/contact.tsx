import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BIZ, IMG } from "@/lib/ascend";
import { Eyebrow, SectionHeading } from "@/components/section-heading";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ascend Fitness Rajajinagar | Call, WhatsApp, Directions" },
      { name: "description", content: "Visit Ascend Fitness at 10th Cross Rd, Rajajinagar, Bengaluru. Call 063612 69494 or WhatsApp us to book a trial." },
      { property: "og:title", content: "Contact Ascend Fitness, Rajajinagar" },
      { property: "og:description", content: "Address, phone, WhatsApp and directions to Ascend Fitness in Rajajinagar, Bengaluru." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const goal = String(fd.get("goal") || "");
    const msg = `Hi Ascend Fitness! I'd like to book a trial.%0A%0AName: ${name}%0APhone: ${phone}%0AGoal: ${goal}`;
    window.open(`${BIZ.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="container-x pb-10 pt-24 md:pt-32">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-black leading-[0.95] md:text-7xl">
          Let's get you <span className="gold-gradient">started.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Call, WhatsApp, or drop by. We're on 10th Cross Road, Rajajinagar — above Tata Motors.
        </p>
      </section>

      <section className="container-x grid gap-6 pb-16 md:grid-cols-3">
        <a href={`tel:${BIZ.phoneIntl}`} className="hover-lift flex items-start gap-4 rounded-2xl border border-white/10 bg-card p-6">
          <Phone className="h-6 w-6 shrink-0 text-primary" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Call</div>
            <div className="mt-1 text-lg font-bold">{BIZ.phone}</div>
            <div className="text-xs text-muted-foreground">Tap to call</div>
          </div>
        </a>
        <a href={BIZ.whatsapp} target="_blank" rel="noreferrer" className="hover-lift flex items-start gap-4 rounded-2xl border border-white/10 bg-card p-6">
          <MessageCircle className="h-6 w-6 shrink-0 text-primary" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">WhatsApp</div>
            <div className="mt-1 text-lg font-bold">Chat with us</div>
            <div className="text-xs text-muted-foreground">Usually replies in minutes</div>
          </div>
        </a>
        <a href={BIZ.mapsUrl} target="_blank" rel="noreferrer" className="hover-lift flex items-start gap-4 rounded-2xl border border-white/10 bg-card p-6">
          <Navigation className="h-6 w-6 shrink-0 text-primary" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Directions</div>
            <div className="mt-1 text-lg font-bold">Open in Maps</div>
            <div className="text-xs text-muted-foreground">Rajajinagar, Bengaluru</div>
          </div>
        </a>
      </section>

      <section className="container-x grid gap-10 pb-20 md:grid-cols-2 md:pb-28">
        <div>
          <SectionHeading eyebrow="Book a trial" title={<>Send us your <span className="gold-gradient">details.</span></>} sub="We'll WhatsApp you back to confirm your slot." />
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
              <input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</label>
              <input required name="phone" type="tel" className="mt-2 w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm outline-none focus:border-primary" placeholder="10-digit mobile" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Goal</label>
              <textarea name="goal" rows={3} className="mt-2 w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Fat loss, strength, conditioning…" />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:brightness-110">
              <MessageCircle className="h-4 w-4" /> Send via WhatsApp
            </button>
            {sent && <p className="text-sm text-primary">Opening WhatsApp…</p>}
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-card p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Address</div>
                <p className="mt-1 text-sm leading-relaxed">
                  {BIZ.addressLine},<br /> {BIZ.area}, {BIZ.city} {BIZ.postal}
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Hours</div>
                <p className="mt-1 text-sm">{BIZ.hours}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Ascend Fitness location map"
              src={BIZ.mapsEmbed}
              className="h-72 w-full md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
