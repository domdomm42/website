"use client";

import Link from "next/link";
import Image from "next/image";

/** Magazine-style treatments for archived projects (playground) */
export type ArchiveStyle = "kicker" | "caption" | "folio" | "deck" | "rule";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  number: string;
  tags?: string[];
  featured?: boolean;
  archived?: boolean;
  archiveStyle?: ArchiveStyle;
  logo?: string;
  logoDark?: string;
  logoAlt?: string;
  /** mono = force black/white for theme; color = keep original */
  logoTone?: "mono" | "color";
  monogram?: string;
  /** When true, card is not a link (for comparison demos) */
  demo?: boolean;
}

function ProjectLogo({
  logo,
  logoDark,
  logoAlt,
  monogram,
  title,
  logoTone = "mono",
}: {
  logo?: string;
  logoDark?: string;
  logoAlt?: string;
  monogram?: string;
  title: string;
  logoTone?: "mono" | "color";
}) {
  if (logo) {
    const isColor = logoTone === "color";
    return (
      <span className="inline-flex items-center shrink-0">
        <Image
          src={logo}
          alt={logoAlt ?? `${title} logo`}
          width={isColor ? 56 : 180}
          height={56}
          className={`h-12 sm:h-14 w-auto max-w-[11rem] object-contain object-right ${
            isColor ? "project-logo-color" : "project-logo-mono"
          } ${logoDark ? "project-logo--light-only" : ""}`}
        />
        {logoDark && (
          <Image
            src={logoDark}
            alt=""
            width={56}
            height={56}
            aria-hidden
            className="h-12 sm:h-14 w-auto max-w-[11rem] object-contain object-right project-logo-color project-logo--dark-only"
          />
        )}
      </span>
    );
  }

  if (monogram) {
    return (
      <span
        className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border border-[color:var(--rule)] font-display text-base sm:text-lg text-foreground shrink-0"
        aria-hidden
      >
        {monogram}
      </span>
    );
  }

  return null;
}

export default function ProjectCard({
  title,
  description,
  link,
  number,
  tags = [],
  featured = false,
  archived = false,
  archiveStyle = "kicker",
  logo,
  logoDark,
  logoAlt,
  logoTone = "mono",
  monogram,
  demo = false,
}: ProjectCardProps) {
  const style = archived ? archiveStyle : null;

  const article = (
    <article
      className={`project-card relative h-full border-t border-[color:var(--rule)] flex flex-col overflow-hidden ${
        featured ? "pt-8" : "pt-6"
      }`}
    >
      <div className="relative z-[1] flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-5">
          <p
            className={`font-display text-accent/50 leading-none group-hover:text-accent transition-colors ${
              featured
                ? "text-5xl sm:text-6xl lg:text-7xl"
                : "text-4xl sm:text-5xl"
            }`}
          >
            {number}
          </p>
          <ProjectLogo
            logo={logo}
            logoDark={logoDark}
            logoAlt={logoAlt}
            monogram={monogram}
            title={title}
            logoTone={logoTone}
          />
        </div>

        {featured && <p className="section-label mb-3">Feature</p>}

        {style === "kicker" && (
          <p className="archive-kicker mb-2">Archived · Company pivoted</p>
        )}

        <div
          className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2 ${
            featured ? "mb-3" : ""
          }`}
        >
          <h3
            className={`font-display text-foreground group-hover:text-accent transition-colors leading-tight ${
              featured ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {title}
          </h3>
        </div>

        {style === "deck" && (
          <p className="archive-deck mb-3">Company pivoted.</p>
        )}

        {style === "rule" && (
          <div className="archive-rule mb-4" role="note">
            <span className="archive-rule__label">Company pivoted</span>
          </div>
        )}

        <p
          className={`text-text-muted leading-relaxed mb-4 ${
            featured ? "text-lg max-w-xl mb-5" : ""
          }`}
        >
          {description}
        </p>

        {style === "caption" && (
          <p className="archive-caption mb-4">
            Company pivoted — project archived.
          </p>
        )}

        {tags.length > 0 && (
          <p className="text-sm font-medium text-foreground/80 tracking-wide mb-1">
            {tags.join(" · ")}
            {style === "folio" && (
              <span className="archive-folio"> · Company pivoted</span>
            )}
          </p>
        )}

        {style === "folio" && tags.length === 0 && (
          <p className="archive-folio text-sm tracking-wide">Company pivoted</p>
        )}
      </div>
    </article>
  );

  if (demo) {
    return <div className="block h-full group">{article}</div>;
  }

  return (
    <Link
      href={link}
      target="_blank"
      className="block group h-full"
      data-cursor-hover
    >
      {article}
    </Link>
  );
}
