import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ink pb-24 pt-44 text-center">
      <Container>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sun">404</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">This page dried up.</h1>
        <p className="mt-4 text-white/70">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn btn-sun mt-8">
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
