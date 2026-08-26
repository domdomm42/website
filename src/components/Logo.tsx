"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import finalLogoFont from "../../public/finalLogoFont.svg";
import drill from "../../public/drill.svg";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" data-cursor-hover>
      <Image
        src={drill}
        alt=""
        width={28}
        height={28}
        className="opacity-70 group-hover:opacity-100 transition-opacity"
        aria-hidden
      />
      <Image
        src={finalLogoFont}
        alt="Oudom"
        width={100}
        height={40}
        className="opacity-80 group-hover:opacity-100 transition-opacity"
      />
    </Link>
  );
}
