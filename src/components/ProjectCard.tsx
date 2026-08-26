"use client";

import Link from "next/link";
import Image from "next/image";

export type StampVariant = "baseline" | "steep" | "beside" | "banner" | "footer";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  number: string;
  tags?: string[];
  featured?: boolean;
  archived?: boolean;
  stampVariant?: StampVariant;
  logo?: string;
  logoDark?: string;
  logoAlt?: string;
  /** mono = force black/white for theme; color = keep original */
  logoTone?: "mono" | "color";
  monogram?: string;
  /** When true, card is not a link (for stamp comparison demos) */
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

function Stamp({
  variant,
  inline = false,
}: {
  variant: StampVariant;
  inline?: boolean;
}) {
  return (
    <span
      className={`project-cutout__stamp project-cutout__stamp--${variant} ${
        inline ? "project-cutout__stamp--inline" : ""
      }`}
      aria-hidden={!inline}
    >
      Company pivoted
    </span>
  );
}

export default function ProjectCard({
  title,
  description,
  link,
  number,
  tags = [],
  featured = false,
  archived = false,
  stampVariant = "baseline",
  logo,
  logoDark,
  logoAlt,
  logoTone = "mono",
  monogram,
  demo = false,
}: ProjectCardProps) {
  const useBeside = archived && stampVariant === "beside";
  const useFooter = archived && stampVariant === "footer";
  const useOverlay = archived && !useBeside && !useFooter;

  const article = (
    <article
      className={`project-card relative h-full border-t border-[color:var(--rule)] flex flex-col overflow-hidden ${
        featured ? "pt-8" : "pt-6"
      } ${useOverlay ? "project-card--archived" : ""}`}
    >
      {useOverlay && (
        <div
          className={`project-cutout project-cutout--${stampVariant}`}
          aria-hidden
        >
          <Stamp variant={stampVariant} />
        </div>
      )}

      <div
        className={`relative z-[1] flex flex-col h-full ${
          useOverlay ? "project-card__content" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3 min-w-0 flex-wrap">
            <p
              className={`font-display text-accent/50 leading-none group-hover:text-accent transition-colors ${
                featured
                  ? "text-5xl sm:text-6xl lg:text-7xl"
                  : "text-4xl sm:text-5xl"
              }`}
            >
              {number}
            </p>
            {useBeside && <Stamp variant="beside" inline />}
          </div>
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

        <div
          className={`flex flex-wrap items-center gap-x-3 gap-y-2 mb-2 ${
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
          {useFooter && <Stamp variant="footer" inline />}
        </div>
        <p
          className={`text-text-muted leading-relaxed mb-4 ${
            featured ? "text-lg max-w-xl mb-5" : ""
          }`}
        >
          {description}
        </p>
        {tags.length > 0 && (
          <p className="text-sm font-medium text-foreground/80 tracking-wide mb-3">
            {tags.join(" · ")}
          </p>
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
