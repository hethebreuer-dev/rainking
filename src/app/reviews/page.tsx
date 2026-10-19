import type { Metadata } from "next";
import { reviews } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Container, CtaBand, PageHero, ReviewCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Hundreds of Iowa homeowners and businesses trust RainKing with their irrigation. Read what they have to say.",
};

const stats = [
  { value: "4.9", label: "Average rating" },
  { value: "850+", label: "Reviews" },
  { value: "98%", label: "Would recommend" },
  { value: "37+", label: "Years trusted" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer reviews"
        title="Don't Take Our Word For It."
        text="Hundreds of Iowa homeowners and businesses trust RainKing with their irrigation. Here's what they have to say."
      />
      <section className="border-b border-line bg-mist">
        <Container className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-4xl font-black text-ink sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-body">{s.label}</p>
            </Reveal>
          ))}
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container className="grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 80}>
              <ReviewCard review={r} quoteMark />
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand
        tone="ink"
        quoteArrow
        title="Ready to join our happy customers?"
        text="Get a free quote and see the RainKing difference for yourself."
      />
    </>
  );
}
