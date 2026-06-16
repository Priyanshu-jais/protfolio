import { GraduationCap, Users } from "lucide-react";
import { Section, Reveal } from "./Section";
import { profile, stats, education, leadership } from "@/lib/portfolio-data";
// To use your real photo: add priyanshu.png to src/assets/ and uncomment the line below
// import portrait from "@/assets/priyanshu.png";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I Am">
      <div className="grid items-start gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="relative mx-auto max-w-xs">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[2rem] opacity-60 blur-2xl"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            />
            {/* Gradient avatar — replace with <img src={portrait} ...> once you add priyanshu.png to src/assets/ */}
            <div
              className="relative w-full aspect-[4/5] rounded-[1.75rem] border border-border shadow-glow overflow-hidden flex items-center justify-center"
              style={{ background: "var(--gradient-hero)" }}
            >
              <span
                className="select-none font-display font-bold text-white"
                style={{ fontSize: "clamp(4rem, 12vw, 7rem)", letterSpacing: "-0.03em", opacity: 0.92 }}
              >
                PJ
              </span>
              {/* Shimmer overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(255,255,255,0.06) 100%)",
                }}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-5 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-gradient text-3xl font-bold">{s.value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-3" delay={120}>
          <p className="text-lg leading-relaxed text-muted-foreground">{profile.about}</p>

          <div className="mt-8 glass rounded-2xl p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <GraduationCap className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{education.degree}</h3>
                <p className="text-sm text-muted-foreground">{education.school}</p>
                <p className="mt-1 text-sm font-medium text-primary">
                  {education.period} · {education.detail}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 glass rounded-2xl p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Users className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{leadership.role}</h3>
                <p className="text-sm font-medium text-primary">{leadership.org}</p>
                <p className="text-xs text-muted-foreground">{leadership.location}</p>
                <ul className="mt-3 space-y-2">
                  {leadership.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
