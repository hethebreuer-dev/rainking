import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/site";
import { Icon } from "./Icon";

export function PostMeta({ post, date = false }: { post: Post; date?: boolean }) {
  return (
    <p className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.1em]">
      <span className="text-forest">{post.category}</span>
      {date && (
        <span className="flex items-center gap-1 text-body">
          <Icon name="calendar" className="h-3 w-3" /> {post.date}
        </span>
      )}
      <span className="flex items-center gap-1 text-body">
        <Icon name="clock" className="h-3 w-3" /> {post.readTime}
      </span>
    </p>
  );
}

export function PostCard({ post, excerpt = true }: { post: Post; excerpt?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group card-lift flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={post.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="img-zoom object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <PostMeta post={post} />
        <h3 className="mt-2 text-base font-bold leading-snug text-ink transition-colors group-hover:text-forest">
          {post.title}
        </h3>
        {excerpt && <p className="mt-2 flex-1 text-[13px] leading-relaxed text-body">{post.excerpt}</p>}
        <span className="link-arrow mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-forest">
          Read more <Icon name="chevron-right" className="arrow h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
