import React from "react";

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
    <ol className="relative border-l border-gray-800 ml-2">
      {experiences.map((exp) => (
        <li key={exp.company} className="mb-10 ml-6 last:mb-0">
          <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center">
            {exp.current ? (
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
            ) : (
              <span className="h-3 w-3 rounded-full bg-gray-600"></span>
            )}
          </span>
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h4 className="text-lg text-white">{exp.role}</h4>
            <span className="text-gray-500">·</span>
            <span className="text-gray-300">{exp.company}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1 mb-2">{exp.period}</p>
          <p className="text-gray-400 max-w-2xl">{exp.description}</p>
          {exp.note && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-white/5 px-3 py-1 text-sm text-gray-400">
              <svg
                className="w-4 h-4 shrink-0 text-yellow-400/80"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {exp.note}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
