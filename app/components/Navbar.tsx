"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/15 bg-[#f1efe8]/95 backdrop-blur-md">
      <nav className="site-shell flex h-[68px] items-center justify-between" aria-label="Main navigation">
        <Link
          href="/"
          className="relative z-10 flex min-h-11 items-center gap-3 font-archiabold text-sm uppercase tracking-[-0.01em]"
          onClick={() => setIsOpen(false)}
        >
          <span className="h-3 w-3 bg-[#ff542e]" aria-hidden="true" />
          Calvin Haviandy
        </Link>

        <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.12em] md:flex">
          {navigation.map((item, index) => (
            <Link key={item.label} href={item.href} className="group flex min-h-11 items-center gap-2">
              <span className="font-mono text-[9px] text-black/35">0{index + 1}</span>
              <span className="transition group-hover:text-[#ff542e]">{item.label}</span>
            </Link>
          ))}
          <a
            href="mailto:calvinhaviandy@gmail.com"
            className="ml-2 inline-flex min-h-10 items-center bg-[#151513] px-5 text-[#f4f1e9] transition hover:bg-[#ff542e]"
          >
            Say hello ↗
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
          className="relative z-10 grid h-11 w-11 place-items-center border border-black/25 md:hidden"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-1 h-px w-5 bg-current transition-transform ${
                isOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 h-px w-5 bg-current transition-transform ${
                isOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full border-b border-black/15 bg-[#f1efe8] px-5 transition duration-200 md:hidden ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col py-4">
          {navigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex min-h-14 items-center justify-between border-b border-black/15 text-lg font-archiabold"
            >
              {item.label}
              <span className="font-mono text-[10px] font-normal text-black/35">0{index + 1}</span>
            </Link>
          ))}
          <a
            href="mailto:calvinhaviandy@gmail.com"
            className="mt-5 inline-flex min-h-12 items-center justify-center bg-[#151513] px-5 text-sm text-white"
          >
            Say hello ↗
          </a>
        </div>
      </div>
    </header>
  );
}
