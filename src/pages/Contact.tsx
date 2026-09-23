import { ContactForm } from "../components/contact/ContactForm";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactInfoCards } from "../components/contact/ContactInfoCards";
import { OfficeMap } from "../components/contact/OfficeMap";
import { Reveal } from "../components/ui/Reveal";

export function Contact() {
  return (
    <>
      <ContactHero />

      <section className="relative mx-auto max-w-7xl border-t border-border px-6 pb-[clamp(80px,12vh,160px)] pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
          <ContactInfoCards />
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-10">
          <OfficeMap />
        </Reveal>
      </section>
    </>
  );
}
