"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import switchOn from "../../public/switch-on.mp3";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onMouseEnter={() => {
                const audio = new Audio(switchOn);
                audio.volume = 0.3;
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
