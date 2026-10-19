import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business, cities, cityFaqs, getCity, reviews, services } from "@/data/site";
import { Icon, Stars } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, Container, Faq, MapEmbed, PageHero } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const city = getCity((await params).city);
  if (!city) return {};
  return {
    title: `Sprinkler Services in ${city.name}, Iowa`,
    description: `Sprinkler installation, repair, seasonal maintenance, backflow testing, and lighting in ${city.name}, Iowa. Free quotes from RainKing.`,
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const city = getCity((await params).city);
  if (!city) notFound();

  // Show reviews from this city first, then fill up to three.
  const local = reviews.filter((r) => r.city === city.name);
  const shown = [...local, ...reviews.filter((r) => r.city !== city.name)].slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service area"
        title={`Sprinkler Services in ${city.name}, Iowa`}
        text={`${city.blurb} RainKing provides professional sprinkler installation, repair, seasonal maintenance, backflow testing, landscape lighting, and more throughout ${city.name} and the surrounding area.`}
      />
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/service-areas", label: "Service Areas" }, { label: city.name }]} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight">Your Local Irrigation Experts in {city.name}</h2>
              <p className="mt-4 leading-relaxed text-body">
                For over 37 years, RainKing has been the trusted name for sprinkler and irrigation services in{" "}
                {city.name}. Whether you need a brand-new system installed, a fast repair, seasonal maintenance, or
                landscape lighting, our local technicians deliver dependable, professional service — backed by a company
                that&apos;s been serving Central Iowa since 1988.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="text-lg font-bold">Services We Offer in {city.name}</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-3.5 py-3 text-[13px] font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-forest/40 hover:text-forest"
                    >
                      <Icon name="check-circle" className="h-4 w-4 shrink-0 text-forest" /> {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="text-lg font-bold">What {city.name} Customers Say</h3>
              <div className="mt-4 space-y-4">
                {shown.map((r) => (
                  <figure key={r.name} className="card-lift rounded-xl border border-line bg-white p-5 shadow-sm">
                    <Stars />
                    <blockquote className="mt-2 text-sm text-ink/85">&quot;{r.text}&quot;</blockquote>
                    <figcaption className="mt-3 text-[13px] font-bold">
                      {r.name} · {r.city}, IA
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="text-lg font-bold">{city.name} Sprinkler FAQs</h3>
              <div className="mt-2">
                <Faq items={cityFaqs(city.name)} />
              </div>
            </Reveal>
          </div>

          <aside className="space-y-5">
            <Reveal className="overflow-hidden rounded-xl border border-line bg-white shadow-lg">
              <div id="quote" className="bg-forest px-5 py-4 font-bold text-white">
                Get A Free Quote in {city.name}
              </div>
              <div className="p-5">
                <QuoteForm city={city.name} />
              </div>
            </Reveal>
            <Reveal delay={100} className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
              <MapEmbed query={`${city.name}, Iowa`} className="h-44" />
              <div className="space-y-2 p-4">
                <p className="flex items-center gap-2 text-[13px] font-semibold">
                  <Icon name="map-pin" className="h-4 w-4 text-forest" /> Serving {city.name}, Iowa
                </p>
                <a href={business.phoneHref} className="flex items-center gap-2 text-lg font-bold text-forest hover:text-forest-dark">
                  <Icon name="phone" className="h-4 w-4" /> {business.phone}
                </a>
              </div>
            </Reveal>
          </aside>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[1.75rem]">
              Ready for service in {city.name}?
            </h2>
            <p className="mt-1.5 text-sm text-white/70">Free quotes. Fast scheduling. Local experts.</p>
          </Reveal>
          <Reveal delay={100}>
            <Link href="#quote" className="btn btn-sun">
              Get A Free Quote <Icon name="arrow-right" className="arrow h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
