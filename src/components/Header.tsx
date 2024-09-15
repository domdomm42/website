"use client";

import Link from "next/link";
import Logo from "./Logo";
import switchOn from "../../public/switch-on.mp3";

export default function Header() {
  return (
    <header className="mb-12 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onMouseEnter={() => {
                const audio = new Audio(switchOn);
                audio.play();
              }}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
