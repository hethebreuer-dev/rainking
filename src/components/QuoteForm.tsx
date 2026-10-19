"use client";

import { useState } from "react";
import { business, services } from "@/data/site";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <span className="mb-1.5 block text-[13px] font-medium text-ink">
      {children}
      {required && " *"}
    </span>
  );
}

/**
 * Quote request form. `layout="wide"` puts fields side by side (contact page);
 * `layout="narrow"` stacks them (sidebar on service and city pages).
 */
export function QuoteForm({
  defaultService = services[0].name,
  city,
  layout = "narrow",
}: {
  defaultService?: string;
  city?: string;
  layout?: "narrow" | "wide";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const wide = layout === "wide";
  const pair = wide ? "grid gap-4 sm:grid-cols-2" : "grid gap-4";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="animate-in py-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage text-forest">
          <Icon name="check-circle" className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-ink">Thanks — we got it!</h3>
        <p className="mt-2 text-sm text-body">We&apos;ll call you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {city && <input type="hidden" name="city" value={city} />}
      <div className={pair}>
        <label>
          <Label required>Full name</Label>
          <input name="name" required autoComplete="name" placeholder="John Smith" className="field" />
        </label>
        <label>
          <Label required>Phone</Label>
          <input name="phone" type="tel" required autoComplete="tel" placeholder={business.phone} className="field" />
        </label>
      </div>
      <label>
        <Label>Email</Label>
        <input name="email" type="email" autoComplete="email" placeholder="you@email.com" className="field" />
      </label>
      <label>
        <Label required>Service address</Label>
        <input
          name="address"
          required
          autoComplete="street-address"
          placeholder={`123 Main St, ${city ?? "Des Moines"}, IA`}
          className="field"
        />
      </label>
      <div className={pair}>
        <label>
          <Label>Property type</Label>
          <select name="propertyType" className="field" defaultValue="Residential">
            <option>Residential</option>
            <option>Commercial</option>
            <option>HOA</option>
          </select>
        </label>
        <label>
          <Label>Service needed</Label>
          <select name="service" className="field" defaultValue={defaultService}>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Maintenance Plan</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>
      <div className={pair}>
        <label>
          <Label>Timeline</Label>
          <select name="timeline" className="field" defaultValue="ASAP">
            <option>ASAP</option>
            <option>Within 2 weeks</option>
            <option>Within a month</option>
            <option>Just planning</option>
          </select>
        </label>
        <label>
          <Label>Budget</Label>
          <select name="budget" className="field" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Under $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
          </select>
        </label>
      </div>
      <label>
        <Label>Tell us about your project</Label>
        <textarea
          name="message"
          rows={wide ? 4 : 3}
          placeholder="Describe what you need — dry spots, new install, broken heads, etc."
          className="field resize-y"
        />
      </label>

      <button type="submit" disabled={status === "sending"} className="btn btn-sun w-full disabled:opacity-60">
        <Icon name="upload" className="h-4 w-4" />
        {status === "sending" ? "Sending…" : "Request My Free Quote"}
      </button>
      {status === "error" ? (
        <p className="text-center text-xs text-red-600">
          Sorry, something went wrong. Please call us at{" "}
          <a href={business.phoneHref} className="font-semibold underline">
            {business.phone}
          </a>
          .
        </p>
      ) : (
        <p className="text-center text-[11px] text-body">No obligation. We&apos;ll call you within one business day.</p>
      )}
    </form>
  );
}
