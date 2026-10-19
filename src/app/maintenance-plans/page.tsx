import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CheckItem, Container, CtaBand, FeatureCard, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sprinkler Maintenance Plans",
  description:
    "Annual irrigation maintenance memberships in Central Iowa: spring start-up, winterization, priority scheduling, and discounted repairs.",
};

const plans = [
  {
    name: "Essential",
    tagline: "The basics, handled for you.",
    features: ["Spring start-up service", "Annual winterization", "Automatic seasonal reminders", "10% off all repairs"],
  },
  {
    name: "Complete Care",
    tagline: "Our most popular plan.",
    popular: true,
    features: [
      "Everything in Essential",
      "Annual system inspection",
      "Priority scheduling",
      "15% off all repairs",
      "Mid-summer system check",
      "Free controller programming",
    ],
  },
  {
    name: "Commercial",
    tagline: "For HOAs, businesses & large properties.",
    features: [
      "Everything in Complete Care",
      "Dedicated account manager",
      "Quarterly site visits",
      "20% off all repairs",
      "Backflow testing included",
      "Custom reporting",
    ],
  },
];

const benefits = [
  { icon: "shield", title: "Priority Scheduling", text: "Members go to the front of the line — especially during our busy spring and fall seasons." },
  { icon: "calendar", title: "Automatic Reminders", text: "We text and email you when it's time for start-up, winterization, and inspections. You never have to remember." },
  { icon: "bell", title: "Seasonal Service", text: "Spring start-up and fall winterization are included — the two most important visits of the year." },
  { icon: "wrench", title: "Discounted Repairs", text: "Save 10–20% on every repair, plus parts and labor warranty on all work." },
  { icon: "search", title: "Annual Inspections", text: "A full system health check to catch small problems before they become expensive ones." },
  { icon: "percent", title: "Transparent Pricing", text: "No surprise fees. You approve every repair before we start." },
] as const;

export default function MaintenancePlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Maintenance plans"
        title="Never Worry About Your Irrigation System Again."
        text="Annual memberships that cover the seasonal services your system needs — automatically. We schedule it, we remind you, we show up. You just enjoy a green lawn."
        image="/images/technician-repair.jpg"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`card-lift flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm ${
                  p.popular ? "border-sun shadow-xl shadow-sun/20 md:-mt-4" : "border-line"
                }`}
              >
                {p.popular && (
                  <p className="bg-sun py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                    Most popular
                  </p>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="text-2xl font-extrabold">{p.name}</h2>
                  <p className="mt-1 text-[13px] text-body">{p.tagline}</p>
                  <p className="mt-5 font-display text-xl font-extrabold text-sun-dark">Get A Free Quote</p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <CheckItem key={f}>{f}</CheckItem>
                    ))}
                  </ul>
                  <Link href="/contact#quote" className={`btn mt-8 w-full ${p.popular ? "btn-sun" : "btn-forest"}`}>
                    Choose {p.name} <Icon name="arrow-right" className="arrow h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Membership benefits"
            title="Everything Handled. Nothing to Remember."
            text="Your membership covers the services your system needs every year — plus perks that save you money and hassle."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <FeatureCard icon={b.icon} title={b.title} text={b.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        tone="ink"
        title="Ready to stop worrying about your sprinklers?"
        text="Join hundreds of Iowa homeowners on a RainKing maintenance plan."
      />
    </>
  );
}
