import { type FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { contact } from "../../lib/content";
import { apiUrl } from "../../lib/api";
import { Button } from "../ui/Button";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch(apiUrl("/api/contact"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, service, message }),
        });
        const result: { error?: string } | null = await response.json().catch(() => null);
        if (!response.ok) {
          if (response.status >= 500) throw new Error("Our service is temporarily unavailable. Please try again shortly.");
          throw new Error(result?.error || "Please check your details and try again.");
        }
        setSubmitted(true);
        form.reset();
      } catch (error) {
        if (error instanceof TypeError) {
          setSubmitError("We couldn't connect to our service. Please check your connection and try again.");
        } else {
          setSubmitError(error instanceof Error && error.message ? error.message : "We couldn't send your message. Please try again shortly.");
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-card border border-orange/40 bg-surface p-10 text-center">
        <CheckCircle2 size={40} className="text-orange" />
        <p className="mt-4 text-lg text-text">{contact.form.successMessage}</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-text-muted underline underline-offset-4 hover:text-text">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-border bg-surface p-8">
      <h2 className="text-xl font-bold text-text">{contact.form.heading}</h2>
      <p className="mt-2 text-sm text-text-muted">{contact.form.subtext}</p>
      {submitError && <p role="alert" className="mt-4 text-sm text-orange-hover">{submitError}</p>}
      <div className="mt-6 flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">Full Name</label>
          <input id="name" name="name" type="text" className="w-full rounded-xl border border-border-strong bg-bg px-4 py-3 text-text outline-none focus:border-orange/50" />
          {errors.name && <p className="mt-1.5 text-xs text-orange-hover">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">Email Address</label>
          <input id="email" name="email" type="email" className="w-full rounded-xl border border-border-strong bg-bg px-4 py-3 text-text outline-none focus:border-orange/50" />
          {errors.email && <p className="mt-1.5 text-xs text-orange-hover">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-text">Service Interested In</label>
          <select id="service" name="service" defaultValue={contact.form.serviceOptions[0]} className="w-full rounded-xl border border-border-strong bg-bg px-4 py-3 text-text outline-none focus:border-orange/50">
            {contact.form.serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full resize-none rounded-xl border border-border-strong bg-bg px-4 py-3 text-text outline-none focus:border-orange/50" />
          {errors.message && <p className="mt-1.5 text-xs text-orange-hover">{errors.message}</p>}
        </div>
        <Button type="submit" variant="cta" className="mt-2 w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : contact.form.submitLabel}
        </Button>
      </div>
    </form>
  );
}
