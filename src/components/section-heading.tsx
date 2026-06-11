import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
      <span className="h-px w-6 bg-primary/60" /> {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.05] md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}
