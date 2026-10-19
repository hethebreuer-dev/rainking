import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business, getPost, posts } from "@/data/site";
import { Icon } from "@/components/Icon";
import { PostCard, PostMeta } from "@/components/PostCard";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, Container } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Dark strip behind the fixed header */}
      <div className="h-[68px] bg-ink md:h-[98px]" />
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }, { label: post.category }]} />

      <article className="pb-16 pt-12">
        <Container>
          <header className="animate-in max-w-4xl">
            <PostMeta post={post} date />
            <h1 className="mt-3 text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">{post.excerpt}</p>
          </header>
          <div className="animate-in delay-2 relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl shadow-black/15">
            <Image src={post.image} alt="" fill preload sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-[16px] leading-relaxed text-ink/85">
            {post.body.map((para) => (
              <Reveal key={para}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-mist px-6 py-8 text-center">
            <h2 className="text-xl font-bold">Questions about your irrigation system?</h2>
            <p className="mt-1.5 text-sm text-body">Our team is happy to help — no obligation.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href={business.phoneHref} className="btn btn-sun">
                Call {business.phone}
              </a>
              <Link href="/contact#quote" className="btn btn-ghost-light">
                Get A Free Quote <Icon name="arrow-right" className="arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </article>

      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">More Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PostCard post={p} excerpt={false} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
