import { type FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { contact } from "../../lib/content";
import { Button } from "../ui/Button";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please enter a message.";

    setErrors(nextErrors);
    // No backend is wired up yet — this only validates and shows the success state locally.
    // TODO: send this payload to a real endpoint (API route, Formspree, EmailJS, etc.) before launch.
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      e.currentTarget.reset();
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-card border border-orange/40 bg-surface p-10 text-center">
        <CheckCircle2 size={40} className="text-orange" />
        <p className="mt-4 text-lg text-text">{contact.form.successMessage}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-text-muted underline underline-offset-4 hover:text-text"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-border bg-surface p-8">
      <h2 className="text-xl font-bold text-text">{contact.form.heading}</h2>
      <p className="mt-2 text-sm text-text-muted">{contact.form.subtext}</p>

      <div className="mt-6 flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-xl border border-border-strong bg-bg px-4 py-3 text-text outline-none focus:border-orange/50"
          />
          {errors.name && <p className="mt-1.5 text-xs text-orange-hover">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-border-strong bg-bg px-4 py-3 text-text outline-none focus:border-orange/50"
          />
          {errors.email && <p className="mt-1.5 text-xs text-orange-hover">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-text">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            defaultValue={contact.form.serviceOptions[0]}
            className="w-full rounded-xl border border-border-strong bg-bg px-4 py-3 text-text outline-none focus:border-orange/50"
          >
            {contact.form.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full resize-none rounded-xl border border-border-strong bg-bg px-4 py-3 text-text outline-none focus:border-orange/50"
          />
          {errors.message && <p className="mt-1.5 text-xs text-orange-hover">{errors.message}</p>}
        </div>

        <Button type="submit" variant="cta" className="mt-2 w-full">
          {contact.form.submitLabel}
        </Button>
      </div>
    </form>
  );
}
