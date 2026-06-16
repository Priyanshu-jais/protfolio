import { Section, Reveal } from "./Section";
import { skills } from "@/lib/portfolio-data";
import { getSkillIcon } from "@/lib/skill-icons";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & Technologies">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat, i) => (
          <Reveal key={cat.group} delay={i * 80}>
            <div className="glass h-full rounded-2xl p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{cat.group}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => {
                  const Icon = getSkillIcon(item);
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Icon className="size-4 text-primary" />
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
