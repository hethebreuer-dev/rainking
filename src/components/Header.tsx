"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business, nav } from "@/data/site";
import { Icon } from "./Icon";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ink/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      {/* Top info bar */}
      <div
        className={`hidden border-b border-white/10 transition-all duration-300 md:block ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-1.5 text-[11px] text-white/70 sm:px-6">
          <span>
            {business.region} · {business.hours}
          </span>
          <a href={business.phoneHref} className="font-medium text-sun hover:text-white">
            {business.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0 transition-transform duration-200 hover:scale-[1.03]" aria-label="RainKing home">
          <Image src="/images/logo.png" alt="RainKing" width={175} height={28} preload className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-2.5 py-2 text-[13px] font-medium leading-tight transition-colors duration-200 after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-sun after:transition-transform after:duration-300 hover:text-sun hover:after:scale-x-100 xl:px-3 ${
                  active ? "text-sun after:scale-x-100" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-white transition-colors hover:text-sun 2xl:flex"
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-sun" />
            {business.phone}
          </a>
          <Link href="/contact#quote" className="btn btn-sun hidden whitespace-nowrap !px-4 !py-2.5 md:inline-flex">
            Get A Free Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="h-[calc(100dvh-60px)] overflow-y-auto border-t border-white/10 bg-ink lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
                className={`animate-in border-b border-white/10 py-3.5 text-base font-medium ${
                  isActive(pathname, item.href) ? "text-sun" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={business.phoneHref} className="btn btn-ghost-dark mt-6">
              <Icon name="phone" className="h-4 w-4 text-sun" />
              {business.phone}
            </a>
            <Link href="/contact#quote" onClick={() => setOpen(false)} className="btn btn-sun mt-3">
              Get A Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
