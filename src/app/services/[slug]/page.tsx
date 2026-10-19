import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { business, getService, services } from "@/data/site";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { Container, Faq, PageHero, SectionHeading, ServiceCard } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.name} in Des Moines & Central Iowa`,
    description: service.short,
    openGraph: { images: [service.image] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const index = services.indexOf(service);
  const related = [1, 2, 3].map((n) => services[(index + n) % services.length]);

  return (
    <>
      <PageHero eyebrow={service.name} title={service.name} text={service.short} image={service.image} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sun text-ink shadow-md">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight">{service.name}</h2>
              <p className="mt-4 leading-relaxed text-body">{service.intro}</p>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="text-lg font-bold">What&apos;s Included</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-3.5 py-3 text-[13px] shadow-sm transition-colors hover:border-forest/40"
                  >
                    <Icon name="check-circle" className="h-4 w-4 shrink-0 text-forest" /> {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="text-lg font-bold">Our Process</h3>
              <ol className="mt-4 space-y-3">
                {service.process.map((step, i) => (
                  <li
                    key={step.title}
                    className="card-lift flex items-center gap-4 rounded-xl border border-line bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{step.title}</span>
                      <span className="block text-[13px] text-body">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="text-lg font-bold">Frequently Asked Questions</h3>
              <div className="mt-2">
                <Faq items={service.faqs} />
              </div>
            </Reveal>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <Reveal className="overflow-hidden rounded-xl border border-line bg-white shadow-lg">
              <div id="quote" className="bg-forest px-5 py-4 text-white">
                <p className="font-bold">Get A Free Quote</p>
                <p className="text-xs text-white/75">For {service.name}</p>
              </div>
              <div className="p-5">
                <QuoteForm defaultService={service.name} />
              </div>
            </Reveal>
            <Reveal delay={100} className="rounded-xl border border-line bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold">Prefer to call?</p>
              <a href={business.phoneHref} className="mt-1 flex items-center gap-2 text-lg font-bold text-forest hover:text-forest-dark">
                <Icon name="phone" className="h-4 w-4" /> {business.phone}
              </a>
              <p className="mt-1 text-[11px] text-body">{business.hours}</p>
            </Reveal>
          </aside>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Keep exploring" title="Related Services" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
