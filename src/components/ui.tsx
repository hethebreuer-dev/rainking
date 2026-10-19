import Image from "next/image";
import Link from "next/link";
import { business, type Review, type Service } from "@/data/site";
import { Icon, Stars } from "./Icon";
import { Reveal } from "./Reveal";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${light ? "text-sun" : "text-forest"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-[2.6rem] sm:leading-[1.08] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-body"}`}>{text}</p>}
    </Reveal>
  );
}

/** Dark photo hero used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  text,
  image = "/images/home-lawn.jpg",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-36 sm:pb-20 sm:pt-40">
      <Image src={image} alt="" fill preload sizes="100vw" className="hero-bg object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <Container className="relative">
        <div className="max-w-2xl">
          <p className="animate-in text-[11px] font-bold uppercase tracking-[0.18em] text-sun">{eyebrow}</p>
          <h1 className="animate-in delay-1 mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          {text && (
            <p className="animate-in delay-2 mt-5 text-base leading-relaxed text-white/80 sm:text-lg">{text}</p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}

export function IconTile({ name, variant = "sage" }: { name: Parameters<typeof Icon>[0]["name"]; variant?: "sage" | "sun" }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${
        variant === "sun" ? "bg-sun text-ink shadow-md" : "bg-sage text-forest"
      }`}
    >
      <Icon name={name} className="h-[18px] w-[18px]" />
    </span>
  );
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`link-arrow inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest hover:text-forest-dark ${className}`}>
      {children}
      <Icon name="arrow-right" className="arrow h-3.5 w-3.5" />
    </Link>
  );
}

/** Vertical card: image on top (home page, related services). */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card-lift flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm"
    >
      <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[4/3]">
        <Image src={service.image} alt={service.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="img-zoom object-cover" />
        <span className="absolute left-3 top-3">
          <IconTile name={service.icon} variant="sun" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-body">{service.short}</p>
        <span className="link-arrow mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest">
          Learn more <Icon name="arrow-right" className="arrow h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

/** Horizontal card: image on the left (services page). */
export function ServiceRow({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card-lift flex h-full overflow-hidden rounded-xl border border-line bg-white shadow-sm"
    >
      <div className="relative w-2/5 shrink-0 overflow-hidden">
        <Image src={service.image} alt={service.name} fill sizes="(min-width: 1024px) 20vw, 40vw" className="img-zoom object-cover" />
        <span className="absolute left-3 top-3">
          <IconTile name={service.icon} variant="sun" />
        </span>
      </div>
      <div className="flex min-h-40 flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-body">{service.short}</p>
        <span className="link-arrow mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest">
          Learn more <Icon name="arrow-right" className="arrow h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

export function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: Parameters<typeof Icon>[0]["name"];
  title: string;
  text: string;
}) {
  return (
    <div className="card-lift h-full rounded-xl border border-line bg-white p-5 shadow-sm sm:p-6">
      <IconTile name={icon} />
      <h3 className="mt-4 text-[15px] font-bold text-ink">{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-body">{text}</p>
    </div>
  );
}

export function ReviewCard({ review, quoteMark = false }: { review: Review; quoteMark?: boolean }) {
  return (
    <figure className="card-lift flex h-full flex-col rounded-xl border border-line bg-white p-5 shadow-sm sm:p-6">
      {quoteMark && <Icon name="quote" className="mb-3 h-6 w-6 text-sun/60" strokeWidth={1.5} />}
      <Stars />
      <blockquote className="mt-3 flex-1 text-[14px] leading-relaxed text-ink/85">
        {quoteMark ? review.text : `"${review.text}"`}
      </blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <p className="text-[13px] font-bold text-ink">{review.name}</p>
        <p className="text-[11px] text-body">
          {review.city}, IA · {review.service}
        </p>
      </figcaption>
    </figure>
  );
}

export function CheckItem({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px]">
      <Icon
        name="check-circle"
        className={`mt-px h-4 w-4 shrink-0 ${light ? "text-sun" : "text-forest"}`}
      />
      <span className={light ? "text-white/85" : "text-ink/85"}>{children}</span>
    </li>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-b border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="flex items-center justify-between gap-4 text-[15px] font-semibold text-ink transition-colors hover:text-forest">
            {item.q}
            <Icon name="chevron-down" className="faq-chevron h-4 w-4 shrink-0" />
          </summary>
          <p className="faq-body mt-3 text-sm leading-relaxed text-body">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Colored band with a heading and two buttons, used near the bottom of pages. */
export function CtaBand({
  title,
  text,
  tone = "forest",
  quoteArrow = false,
  showCall = true,
  callLabel,
}: {
  title: string;
  text: string;
  tone?: "forest" | "ink";
  quoteArrow?: boolean;
  showCall?: boolean;
  callLabel?: string;
}) {
  return (
    <section className={tone === "forest" ? "bg-pine" : "bg-ink"}>
      <Container className="flex flex-col items-start justify-between gap-6 py-12 sm:py-14 md:flex-row md:items-center">
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[1.75rem]">{title}</h2>
          <p className="mt-1.5 text-sm text-white/70">{text}</p>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap gap-3">
          {showCall && (
            <a href={business.phoneHref} className="btn btn-sun">
              {callLabel ?? `Call ${business.phone}`}
            </a>
          )}
          <Link href="/contact#quote" className={`btn ${showCall ? "btn-ghost-dark" : "btn-sun"}`}>
            Get A Free Quote
            {quoteArrow && <Icon name="arrow-right" className="arrow h-4 w-4" />}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export function MapEmbed({ query, className = "" }: { query: string; className?: string }) {
  const q = encodeURIComponent(query);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <iframe
        title={`Map of ${query}`}
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-2 top-2 inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-xs font-medium text-blue-600 shadow hover:underline"
      >
        Open in Maps <Icon name="external" className="h-3 w-3" />
      </a>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <div className="border-b border-line bg-mist/60">
      <Container>
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 py-3 text-xs text-body">
          {items.map((item, i) => (
            <span key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <Icon name="chevron-right" className="h-3 w-3" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-forest">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-ink">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </Container>
    </div>
  );
}
