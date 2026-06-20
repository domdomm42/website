import React from "react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Lawpath",
    role: "Software Engineer",
    period: "Mar 2025 — Present",
    description:
      "Building full-stack features that help small businesses handle their legal needs.",
    current: true,
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
        </li>
      ))}
    </ol>
  );
}
