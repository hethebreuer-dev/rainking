import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/site";
import { Icon } from "@/components/Icon";
import { PostCard, PostMeta } from "@/components/PostCard";
import { Reveal } from "@/components/Reveal";
import { Container, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Irrigation Tips From the Pros",
  description:
    "Practical advice on keeping your Iowa lawn green, your sprinkler system running, and your water bill low.",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);

  return (
    <>
      <PageHero
        eyebrow="Blog & resources"
        title="Irrigation Tips From the Pros"
        text="Practical advice on keeping your Iowa lawn green, your system running, and your water bill low — from the team that's been doing it for 37 years."
        image="/images/sprinkler-head.jpg"
      />
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group card-lift grid overflow-hidden rounded-2xl border border-line bg-white shadow-lg md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-72">
                <Image src={featured.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="img-zoom object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-sun px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <PostMeta post={featured} />
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight transition-colors group-hover:text-forest sm:text-[1.7rem]">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body">{featured.excerpt}</p>
                <span className="link-arrow mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest">
                  Read article <Icon name="arrow-right" className="arrow h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand
        title="Need help with your system?"
        text="Our experts are one call away."
        showCall={false}
      />
    </>
  );
}
