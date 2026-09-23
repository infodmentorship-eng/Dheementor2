import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { contact, site } from "../../lib/content";
import { Reveal } from "../ui/Reveal";
import { WhatsAppLink } from "../ui/WhatsAppLink";

const icons = [MapPin, Mail, Clock, MessageCircle];

export function ContactInfoCards() {
  return (
    <div className="flex flex-col gap-5">
      {contact.infoCards.map((card, i) => {
        const Icon = icons[i];
        const isEmail = card.label === "Email";
        const isWhatsApp = card.label === "Chat on WhatsApp";

        return (
          <Reveal key={card.label} delay={i * 0.06}>
            <div className="flex items-start gap-4 rounded-card border border-border bg-surface p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-soft text-orange">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-text-dim">
                  {card.label}
                </p>
                {isEmail ? (
                  <a href={`mailto:${site.email}`} className="mt-1 text-text hover:text-orange-hover">
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-1 text-text-muted">{card.value}</p>
                )}
                {isWhatsApp && (
                  <div className="mt-3">
                    <WhatsAppLink className="px-4! py-2! text-xs" />
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
