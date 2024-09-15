"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import switchOn from "../../public/switch-on.mp3";
import drill from "../../public/drill.svg";
import finalLogoFont from "../../public/finalLogoFont.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/" className="flex items-center relative">
        <Image
          src={finalLogoFont}
          alt="logo"
          width={150}
          height={150}
          className="hover:opacity-60"
        />
        <div className="absolute" style={{ top: "35px", right: "15px" }}>
          <Image
            src={drill}
            alt="drill"
            width={40}
            height={40}
            className="animate-drill"
          />
        </div>
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
