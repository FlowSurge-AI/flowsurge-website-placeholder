"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const screenshotsEl = document.getElementById("screenshots");
      if (screenshotsEl) {
        const rect = screenshotsEl.getBoundingClientRect();
        setOverDark(rect.top <= 64 && rect.bottom > 64);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDarkNav = scrolled && !overDark;

  const linkClass = `hidden text-base transition-colors md:block ${
    showDarkNav
      ? "text-slate-300 hover:text-white"
      : "text-text-muted hover:text-text-heading"
  }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Dark overlay */}
      <div
        className={`absolute inset-0 bg-[#1e1e2e] shadow-lg transition-transform duration-500 ease-out ${
          showDarkNav ? "translate-y-0" : "-translate-y-full"
        }`}
      />
      {/* Light overlay for dark sections */}
      <div
        className={`absolute inset-0 bg-white shadow-md transition-transform duration-500 ease-out ${
          overDark ? "translate-y-0" : "-translate-y-full"
        }`}
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/">
          <Image
            src={showDarkNav ? "/main-logo-dark-optimized.svg" : "/main-logo-light.png"}
            alt="FlowSurge AI"
            width={160}
            height={36}
            priority
          />
        </a>
        <div className="flex items-center gap-8">
          <a href="/" className={linkClass}>
            Home
          </a>
          {isHome && (
            <>
              <a href="#solution" className={linkClass}>
                About
              </a>
              <a href="#screenshots" className={linkClass}>
                Product
              </a>
            </>
          )}
          <a
            href="https://calendar.app.google/9f7TBnj7odBxppdw7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-light hover:shadow-lg"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
