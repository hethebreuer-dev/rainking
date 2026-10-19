import Image from "next/image";
import Link from "next/link";
import { business, cities, reviews, services } from "@/data/site";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import {
  CheckItem,
  Container,
  Eyebrow,
  FeatureCard,
  ReviewCard,
  SectionHeading,
  ServiceCard,
} from "@/components/ui";

const trustBar = [
  { icon: "award", label: "37+ Years Experience" },
  { icon: "drops", label: "Thousands of Systems Installed" },
  { icon: "map-pin", label: "Locally Owned" },
  { icon: "shield-check", label: "Licensed & Insured" },
  { icon: "users", label: "Residential & Commercial" },
  { icon: "star", label: "Five-Star Customer Service" },
] as const;

const seasons = [
  { name: "Spring", n: "01", items: ["Sprinkler Start-Up", "System Inspection", "Backflow Testing"], tint: "from-[#1d5a36] to-[#173f27]" },
  { name: "Summer", n: "02", items: ["Repairs", "Adjustments", "System Optimization"], tint: "from-[#3d4a1d] to-[#2b3418]" },
  { name: "Fall", n: "03", items: ["Winterization", "Repairs", "Lighting Installation"], tint: "from-[#4a3a1b] to-[#332a17]" },
  { name: "Winter", n: "04", items: ["Holiday Lighting", "Planning New Irrigation Projects"], tint: "from-[#1c4f4a] to-[#173b37]" },
];

const why = [
  { icon: "map-pin", title: "Locally Owned", text: "Central Iowa born and raised — we know the soil, the weather, and the neighborhoods." },
  { icon: "users", title: "Trusted Across Central Iowa", text: "Thousands of homeowners and hundreds of commercial properties rely on us." },
  { icon: "wrench", title: "Professional Technicians", text: "Trained, uniformed, background-checked. Not subcontractors — our team." },
  { icon: "truck", title: "Commercial Grade Equipment", text: "We install and service the same components trusted on golf courses and estates." },
  { icon: "calendar", title: "Prompt Service", text: "We show up when we say we will. On-time, every time." },
  { icon: "check-circle", title: "Transparent Pricing", text: "Upfront quotes. No surprise fees. You approve before any work starts." },
  { icon: "shield-check", title: "Reliable Scheduling", text: "Plan-friendly reminders and priority slots for maintenance members." },
  { icon: "star", title: "Exceptional Customer Care", text: "Real people answer the phone. We're here before and after the job." },
] as const;

const gallery = [
  { src: "/images/home-lawn.jpg", alt: "Freshly irrigated front lawn at sunset", cls: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/sprinkler-head.jpg", alt: "Pop-up sprinkler head watering grass", cls: "" },
  { src: "/images/technician-repair.jpg", alt: "RainKing technician repairing an irrigation line", cls: "" },
  { src: "/images/landscape-lighting.jpg", alt: "Home with landscape lighting at night", cls: "" },
  { src: "/images/commercial-aerial.jpg", alt: "Aerial view of a commercial irrigation system", cls: "" },
  { src: "/images/holiday-lighting.jpg", alt: "Home decorated with holiday lighting", cls: "sm:col-span-2" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-ink pb-24 pt-36 sm:min-h-[760px]">
        <Image
          src="/images/home-lawn.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-bg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />
        <Container className="relative">
          <div className="max-w-xl">
            <p className="animate-in inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-sun backdrop-blur">
              <Icon name="drops" className="h-3.5 w-3.5" /> Central Iowa · Since {business.founded}
            </p>
            <h1 className="animate-in delay-1 mt-5 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-[3.6rem]">
              Iowa&apos;s #1 Professional <span className="text-sun">Sprinkler</span> Specialists
            </h1>
            <p className="animate-in delay-2 mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
              Keeping Iowa&apos;s lawns greener, healthier, and easier to maintain with professionally designed
              irrigation systems and dependable year-round service.
            </p>
            <div className="animate-in delay-3 mt-8 flex flex-wrap gap-3">
              <Link href="/contact#quote" className="btn btn-sun">
                Get A Free Quote <Icon name="arrow-right" className="arrow h-4 w-4" />
              </Link>
              <a href="#our-work" className="btn btn-ghost-dark backdrop-blur">
                View Our Work
              </a>
            </div>
            <ul className="animate-in delay-4 mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/75">
              {["37+ years", "Licensed & Insured", "Locally Owned"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Icon name="check-circle" className="h-3.5 w-3.5 text-sun" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="bg-ink-soft">
        <Container className="grid grid-cols-2 gap-x-4 gap-y-5 py-6 sm:grid-cols-3 lg:grid-cols-6">
          {trustBar.map((t, i) => (
            <Reveal key={t.label} delay={i * 60} className="flex items-center justify-center gap-2 text-center text-[11px] font-semibold text-white sm:text-xs">
              <Icon name={t.icon} className="h-4 w-4 shrink-0 text-sun" />
              {t.label}
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Core services */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Core Services Built Around Your Lawn"
            text="From custom installation to year-round maintenance, RainKing handles every part of your irrigation and outdoor system — with the same care for a single head as a full commercial build."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Seasons */}
      <section className="bg-pine py-20 sm:py-24">
        <Container>
          <SectionHeading
            light
            eyebrow="Year-round service"
            title="A Service for Every Season"
            text="RainKing doesn't disappear in the off-season. From spring start-up through fall winterization and winter holiday lighting, we keep your property looking great all twelve months of the year."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <div className={`card-lift h-full rounded-2xl border border-white/10 bg-gradient-to-br ${s.tint} p-6`}>
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-extrabold text-white">{s.name}</h3>
                    <span className="font-display text-3xl font-black text-white/10">{s.n}</span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {s.items.map((item) => (
                      <CheckItem key={item} light>
                        {item}
                      </CheckItem>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Maintenance plans teaser */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Maintenance plans</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-[2.6rem]">
              Never Worry About Your Irrigation System Again.
            </h2>
            <p className="mt-5 leading-relaxed text-body">
              Our annual maintenance membership covers the services your system needs every year — automatically. We
              schedule it, we remind you, we show up. You just enjoy a green lawn.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Priority scheduling",
                "Automatic seasonal reminders",
                "Spring start-up included",
                "Annual winterization included",
                "Discounted repairs",
                "Annual system inspection",
              ].map((t) => (
                <CheckItem key={t}>{t}</CheckItem>
              ))}
            </ul>
            <Link href="/maintenance-plans" className="btn btn-forest mt-8">
              Explore Maintenance Plans <Icon name="arrow-right" className="arrow h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-black/15">
              <Image
                src="/images/technician-repair.jpg"
                alt="RainKing technician servicing a sprinkler line"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="img-zoom object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 rounded-xl bg-sun px-5 py-4 shadow-xl sm:-left-5">
              <p className="font-display text-3xl font-black text-ink">37+</p>
              <p className="text-xs font-semibold text-ink">Years Serving Iowa</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Why RainKing */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why RainKing"
            title="The Trusted Name in Iowa Irrigation"
            text="We've earned our reputation one lawn at a time — through honest work, dependable service, and decades of expertise."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 70}>
                <FeatureCard icon={w.icon} title={w.title} text={w.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section id="our-work" className="scroll-mt-20 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our work"
            title="Real Lawns. Real Results."
            text="Every photo below is actual RainKing work — installations, repairs, lighting, and maintenance across Central Iowa."
          />
          <div className="mt-12 grid auto-rows-[200px] gap-4 sm:grid-cols-4 sm:auto-rows-[190px]">
            {gallery.map((g, i) => (
              <Reveal key={g.src + i} delay={i * 70} className={`group relative overflow-hidden rounded-2xl shadow-md ${g.cls}`}>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="img-zoom object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Customer reviews"
            title="What Iowa Homeowners Say"
            text="Real reviews from real customers across Central Iowa."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 80}>
                <ReviewCard review={r} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn btn-ghost-light">
              Read All Reviews <Icon name="arrow-right" className="arrow h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Service areas */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Service areas"
            title="Proudly Serving Central Iowa"
            text="From Des Moines to Ames, we keep Iowa green. Click your city for local service details."
          />
          <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-white"
              >
                {c.name}
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Project planner */}
      <section className="bg-ink py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow light>Project planner</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-[2.6rem]">
              Plan Your Project in Minutes.
            </h2>
            <p className="mt-5 leading-relaxed text-white/75">
              Tell us about your lawn, your goals, and your timeline. Our team will help you choose the right services
              and schedule a visit — no pressure, no obligation.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Choose the services you need",
                "Identify irrigation problems fast",
                "Tell us about your property",
                "Get a free, no-obligation estimate",
              ].map((t) => (
                <CheckItem key={t} light>
                  {t}
                </CheckItem>
              ))}
            </ul>
            <Link href="/contact#quote" className="btn btn-sun mt-8">
              Start Planning <Icon name="arrow-right" className="arrow h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-ink-soft p-6">
              <a href={business.phoneHref} className="group flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun text-ink transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-white/60">Prefer to talk?</span>
                  <span className="block text-lg font-bold text-white group-hover:text-sun">{business.phone}</span>
                </span>
              </a>
              <div className="mt-5 rounded-xl border border-white/10 p-4">
                <p className="text-[13px] text-white/80">
                  <span className="font-semibold text-sun">{business.weekdayHours}</span> · {business.saturdayHours}
                </p>
                <p className="mt-1 text-[11px] text-white/50">Same-day callbacks for urgent repairs.</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
