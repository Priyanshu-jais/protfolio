import { Briefcase, MapPin } from "lucide-react";
import { Section, Reveal } from "./Section";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Work Experience">
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute left-2.5 top-1.5 z-10 flex size-4 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-auto ${
                    i % 2 === 0 ? "md:-right-2" : "md:-left-2"
                  }`}
                />
                <div className="glass rounded-2xl p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 md:text-left">
                  <div className="mb-2 flex items-center gap-2 text-primary md:hidden">
                    <Briefcase className="size-4" />
                  </div>
                  <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    {job.period}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{job.company}</h3>
                  <p className="font-medium text-foreground/90">{job.role}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground md:flex-row">
                    <MapPin className="size-3.5" /> {job.location}
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">{job.stack}</p>
                  <ul className="mt-4 space-y-2 text-left">
                    {job.points.map((p, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
