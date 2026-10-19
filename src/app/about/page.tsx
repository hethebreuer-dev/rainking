import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Container, CtaBand, Eyebrow, FeatureCard, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About RainKing",
  description: "Iowa's trusted sprinkler specialists since 1988. Locally owned, licensed and insured, serving Central Iowa.",
};

const stats = [
  { value: "37+", label: "Years in business" },
  { value: "10,000+", label: "Systems installed" },
  { value: "16", label: "Cities served" },
  { value: "5★", label: "Rating goal" },
];

const values = [
  { icon: "award", title: "Decades of Expertise", text: "Since 1988, we've installed and serviced thousands of systems across Central Iowa." },
  { icon: "map-pin", title: "Locally Owned", text: "We live here. We know the soil, the weather, and what works in Iowa." },
  { icon: "users", title: "Residential & Commercial", text: "From single-family homes to large HOAs and commercial properties." },
  { icon: "shield-check", title: "Licensed & Insured", text: "Fully credentialed and insured for your protection and peace of mind." },
  { icon: "wrench", title: "Professional Technicians", text: "Our own trained, uniformed employees — never subcontractors." },
  { icon: "heart", title: "Customer First", text: "We answer the phone, show up on time, and stand behind our work." },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RainKing"
        title="Iowa's Trusted Sprinkler Specialists Since 1988."
        text="For over three decades, RainKing has kept Central Iowa lawns greener, healthier, and easier to maintain — one system at a time."
        image="/images/technician-repair.jpg"
      >
        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`animate-in text-center delay-${i + 2}`}>
              <p className="font-display text-4xl font-black text-sun sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="group relative aspect-[4/3.4] overflow-hidden rounded-2xl shadow-2xl shadow-black/15">
            <Image
              src="/images/commercial-aerial.jpg"
              alt="Aerial view of a large commercial lawn being irrigated"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="img-zoom object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-[2.6rem]">
              Built on Hard Work and Honest Service.
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-body">
              <p>
                RainKing started in 1988 with a single truck, a handful of tools, and a simple promise: do good work,
                show up when you say you will, and treat every customer like a neighbor. Three decades later, that
                promise hasn&apos;t changed.
              </p>
              <p>
                We&apos;ve grown into Central Iowa&apos;s most trusted irrigation company — installing thousands of
                systems, servicing every major brand, and building long-term relationships with homeowners, HOAs, and
                commercial properties across the region.
              </p>
              <p>
                We&apos;re still locally owned. Still staffed by our own trained technicians. Still answering the phone
                when you call. Because that&apos;s how you build a reputation that lasts 37 years.
              </p>
            </div>
            <Link href="/contact" className="btn btn-sun mt-8">
              Work With Us
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="The Values Behind the Work" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <FeatureCard icon={v.icon} title={v.title} text={v.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Experience the RainKing difference." text="37 years of expertise. One phone call away." />
    </>
  );
}
