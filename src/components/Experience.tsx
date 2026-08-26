interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
  note?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Lawpath",
    role: "Software Engineer",
    period: "Mar 2025 — Present",
    description:
      "Building full-stack features that help small businesses handle their legal needs.",
    current: true,
    note: "Recipient of the Rising Star award, Dec 2025",
  },
  {
    company: "OpenOnion",
    role: "Software Engineer",
    period: "May 2024 — Mar 2025",
    description:
      "Built a platform helping students navigate university life before the company pivoted.",
  },
];

export default function Experience() {
  return (
    <ol className="space-y-10">
      {experiences.map((exp, index) => (
        <li
          key={exp.company}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 border-t border-[color:var(--rule)] pt-6"
        >
          <div className="md:col-span-3">
            <p className="section-label mb-1">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-text-muted text-sm">{exp.period}</p>
          </div>
          <div className="md:col-span-9">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <h3 className="font-display text-xl sm:text-2xl text-foreground">
                {exp.role}
              </h3>
              <span className="text-text-muted">at</span>
              <span className="text-accent">{exp.company}</span>
              {exp.current && (
                <span className="text-xs tracking-wide uppercase text-text-muted">
                  · Current
                </span>
              )}
            </div>
            <p className="text-text-muted leading-relaxed max-w-2xl">
              {exp.description}
            </p>
            {exp.note && (
              <div className="award-note">
                <svg
                  className="award-note__star"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2.5l2.6 6.6h6.9l-5.5 4.2 2.1 6.7L12 16.8l-5.1 3.2 2.1-6.7-5.5-4.2h6.9L12 2.5z" />
                </svg>
                <p className="award-note__text">{exp.note}</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
