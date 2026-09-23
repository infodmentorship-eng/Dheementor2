import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { footer, site } from "../lib/content";
import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo className="h-14" />
            <p className="mt-4 max-w-[28ch] text-sm text-text-muted">{footer.blurb}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">
              Quick Links
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-text-muted hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">Services</p>
            <ul className="mt-4 flex flex-col gap-3">
              {footer.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-text-muted hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">
              Get in Touch
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-orange" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-orange" />
                <a href={`mailto:${site.email}`} className="hover:text-text">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 font-mono text-xs tracking-[0.05em] text-text-dim sm:flex-row">
          <span>{footer.legal}</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text">
              Terms
            </a>
            <a href="#" className="hover:text-text">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
