import { Link } from "@tanstack/react-router";
import { BIZ, IMG } from "@/lib/ascend";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background pb-24 pt-16 md:pb-12">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={IMG.logo} alt="Ascend Fitness logo" className="h-7 w-auto" />
            <span className="text-sm font-semibold tracking-[0.25em] uppercase">Ascend Fitness</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A premium gym in Rajajinagar, Bengaluru. Personal training, CrossFit, HIIT,
            weight training and nutrition — built to help you ascend.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Visit</h4>
          <p className="mt-3 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <span>{BIZ.addressLine}, {BIZ.area}, {BIZ.city} {BIZ.postal}</span>
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" /> {BIZ.hours}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</h4>
          <a href={`tel:${BIZ.phoneIntl}`} className="mt-3 flex items-center gap-2 text-sm hover:text-primary">
            <Phone className="h-4 w-4 text-primary" /> {BIZ.phone}
          </a>
          <a href={BIZ.whatsapp} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm hover:text-primary">
            <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
          </a>
          <nav className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/gallery" className="hover:text-foreground">Gallery</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
      </div>
      <div className="container-x mt-10 border-t border-white/5 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ascend Fitness · Rajajinagar, Bengaluru. All rights reserved.
      </div>
    </footer>
  );
}
