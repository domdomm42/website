"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="mb-12 lg:mb-16">
      <div className="flex justify-between items-center gap-6 pb-4">
        <Link
          href="/"
          className="section-label hover:opacity-70 transition-opacity"
          data-cursor-hover
        >
          Oudom Lim
        </Link>
        <ThemeToggle />
      </div>
      <hr className="hairline" />
    </header>
  );
}
