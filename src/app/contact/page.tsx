import type { Metadata } from "next";
import { business } from "@/data/site";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { Container, IconTile, MapEmbed, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call, email, or send a request. A real person from RainKing will get back to you within one business day.",
};

const methods = [
  { icon: "phone", label: "Call us", value: business.phone, href: business.phoneHref },
  { icon: "mail", label: "Email us", value: business.email, href: `mailto:${business.email}` },
  { icon: "map-pin", label: "Visit us", value: business.address },
  { icon: "clock", label: "Hours", value: business.hours },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's Get Your Lawn Green."
        text="Call us, email us, or send a request below. A real person will get back to you within one business day."
        image="/images/technician-repair.jpg"
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight">Get In Touch</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                RainKing is Central Iowa&apos;s trusted irrigation specialist. Whether you need a quote, a repair, or just
                have a question about your system, we&apos;re here to help.
              </p>
            </Reveal>
            <div className="mt-6 space-y-3">
              {methods.map((m, i) => {
                const inner = (
                  <>
                    <IconTile name={m.icon} />
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-body">{m.label}</span>
                      <span className="block text-[15px] font-bold text-ink">{m.value}</span>
                    </span>
                  </>
                );
                const cls = "card-lift flex items-center gap-4 rounded-xl border border-line bg-white p-4 shadow-sm";
                return (
                  <Reveal key={m.label} delay={i * 70}>
                    {"href" in m ? (
                      <a href={m.href} className={`${cls} hover:border-forest/40`}>
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </Reveal>
                );
              })}
              <Reveal className="flex items-center gap-2 rounded-xl border border-line bg-mist px-4 py-3 text-[13px] font-semibold">
                <Icon name="shield-check" className="h-4 w-4 text-forest" /> Fully Licensed &amp; Insured
              </Reveal>
              <Reveal className="overflow-hidden rounded-xl border border-line shadow-sm">
                <MapEmbed query={business.address} className="h-64" />
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <div id="quote" className="scroll-mt-24 rounded-2xl border border-line bg-white p-6 shadow-xl shadow-black/5 sm:p-7">
              <h2 className="text-xl font-bold">Send Us a Message</h2>
              <p className="mt-1 text-[13px] text-body">Fill out the form and we&apos;ll call you back within one business day.</p>
              <div className="mt-6">
                <QuoteForm layout="wide" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
