import { Trophy } from "lucide-react";
import { Section, Reveal } from "./Section";
import { achievements } from "@/lib/portfolio-data";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements & CP">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.label} delay={i * 70}>
            <div className="glass flex h-full items-center gap-4 rounded-2xl p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Trophy className="size-6" />
              </div>
              <div>
                <div className="text-gradient text-xl font-bold">{a.value}</div>
                <div className="text-sm text-muted-foreground">{a.label}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
