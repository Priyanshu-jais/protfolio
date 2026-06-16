import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { Section, Reveal } from "./Section";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Build" title="Featured Projects">
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <article className="group glass relative overflow-hidden rounded-3xl p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <FolderGit2 className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{p.name}</h3>
                      <p className="text-xs font-medium text-muted-foreground">{p.period}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
                  {p.points && p.points.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {p.points.map((pt, idx) => (
                        <li key={idx} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="hidden size-7 shrink-0 text-muted-foreground transition-colors group-hover:text-primary md:block" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
