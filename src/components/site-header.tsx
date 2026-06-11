import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BIZ, IMG } from "@/lib/ascend";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/90 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        {/* Logo — SVG already contains both icon + "ASCEND FITNESS" text */}
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={IMG.logo} alt="Ascend Fitness logo" className="h-9 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${BIZ.phoneIntl}`}
          className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/5 transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="container-x flex flex-col py-3">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3.5 text-base font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
              activeProps={{ className: "text-foreground bg-white/5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          {/* Mobile CTA inside drawer */}
          <a
            href={`tel:${BIZ.phoneIntl}`}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call {BIZ.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
