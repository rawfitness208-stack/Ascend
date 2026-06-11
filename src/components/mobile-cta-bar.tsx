import { Phone, MessageCircle } from "lucide-react";
import { BIZ } from "@/lib/ascend";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
      <a
        href={`tel:${BIZ.phoneIntl}`}
        className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a
        href={BIZ.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-black"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
