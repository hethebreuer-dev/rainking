import type { Metadata } from "next";
import { services } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Container, CtaBand, PageHero, ServiceRow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Irrigation & Outdoor Services",
  description:
    "Sprinkler installation, repair, spring start-up, winterization, backflow testing, landscape lighting, and holiday lighting in Central Iowa.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Irrigation & Outdoor Services"
        text="Full-service sprinkler installation, repair, and seasonal maintenance — plus landscape lighting and holiday lighting. One trusted team for everything your property needs."
      />
      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 100}>
              <ServiceRow service={s} />
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand
        title="Not sure which service you need?"
        text="Call us and we'll help you figure it out — free, no obligation."
      />
    </>
  );
}
