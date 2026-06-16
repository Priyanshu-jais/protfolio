import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 sm:py-28", className)}>
      {(eyebrow || title) && (
        <div className="mb-12 text-center">
          {eyebrow && (
            <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-gradient">{title}</span>
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
