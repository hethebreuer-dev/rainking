import Image from "next/image";
import Link from "next/link";
import { business, nav, services } from "@/data/site";
import { Icon } from "./Icon";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* "Ready for a greener lawn?" band shown on every page */}
      <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-black tracking-tight sm:text-[1.75rem]">Ready for a greener lawn?</h2>
          <p className="mt-1 text-sm text-white/65">Get a free quote from Iowa&apos;s sprinkler experts.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={business.phoneHref} className="btn btn-ghost-dark">
            <Icon name="phone" className="h-4 w-4 text-sun" />
            {business.phone}
          </a>
          <Link href="/contact#quote" className="btn btn-sun">
            Get A Free Quote
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/images/logo.png" alt="RainKing" width={175} height={28} className="h-7 w-auto" />
            <p className="mt-4 max-w-[15rem] text-[13px] leading-relaxed text-white/60">
              {business.years} years keeping Central Iowa lawns greener, healthier, and easier to maintain.
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-sun">
              <Icon name="shield-check" className="h-3.5 w-3.5" /> Fully Licensed &amp; Insured
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[13px] text-white/70 transition-colors hover:text-sun">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-[13px] text-white/70 transition-colors hover:text-sun">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Contact</h3>
            <ul className="mt-4 space-y-3 text-[13px] text-white/70">
              <li>
                <a href={business.phoneHref} className="flex items-center gap-2.5 hover:text-sun">
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-sun" /> {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2.5 hover:text-sun">
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-sun" /> {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-sun" /> {business.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="clock" className="h-4 w-4 shrink-0 text-sun" /> {business.hours}
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="flex flex-col justify-between gap-2 py-5 text-[11px] text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </p>
          <p>Fully Licensed &amp; Insured</p>
        </Container>
      </div>
    </footer>
  );
}
