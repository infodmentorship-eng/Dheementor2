import { Building2, CheckCircle2, FileText, GraduationCap, Users } from "lucide-react";
import { documentTranslation } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

const icons = [Users, GraduationCap, FileText, Building2];

export function DocumentsWeHandle() {
  const { documentsWeHandle } = documentTranslation;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          <span className="text-gradient block">{documentsWeHandle.headingLines[0]}</span>
          <span className="block text-orange">{documentsWeHandle.headingLines[1]}</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {documentsWeHandle.categories.map((category, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={category.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-card border border-border bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-soft text-orange">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-text">{category.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                      <CheckCircle2 size={15} className="shrink-0 text-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
