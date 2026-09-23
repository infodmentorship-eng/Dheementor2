import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { WhatsAppLink } from "./ui/WhatsAppLink";

export function FinalCta({
  heading,
  subtext,
  ctaPrimary,
  showWhatsApp = false,
}: {
  heading: string;
  subtext: string;
  ctaPrimary: string;
  showWhatsApp?: boolean;
}) {
  return (
    <section className="relative overflow-hidden py-[clamp(80px,12vh,160px)]">
      <div className="grid-texture absolute inset-0" />
      <div className="ember" />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="text-gradient text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.08] tracking-[-0.035em]">
          {heading}
          <span className="dot">.</span>
        </h2>

        <p className="mt-6 text-lg text-text-muted">{subtext}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="cta">{ctaPrimary}</Button>
          </Link>
          {showWhatsApp && <WhatsAppLink />}
        </div>
      </Reveal>
    </section>
  );
}
