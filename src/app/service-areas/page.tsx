import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/site";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Container, IconTile, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "RainKing serves homeowners and businesses across the greater Des Moines metro and Central Iowa.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Proudly Serving Central Iowa"
        text="RainKing serves homeowners and businesses across the greater Des Moines metro and Central Iowa. Find your city below for local service details."
        image="/images/commercial-aerial.jpg"
      />
      <section className="py-20 sm:py-24">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 60}>
              <Link
                href={`/service-areas/${c.slug}`}
                className="group card-lift flex items-center gap-4 rounded-xl border border-line bg-white p-4 shadow-sm hover:border-forest/40"
              >
                <IconTile name="map-pin" />
                <span className="flex-1">
                  <span className="block text-[15px] font-bold text-ink">{c.name}</span>
                  <span className="block text-[11px] text-body">Sprinkler &amp; irrigation service</span>
                </span>
                <Icon name="arrow-right" className="h-4 w-4 text-body transition-all duration-200 group-hover:translate-x-1 group-hover:text-forest" />
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
