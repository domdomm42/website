"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  tags,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Link href={link} target="_blank">
        <div className="project-card relative bg-gradient-to-br from-[#292929] to-[#1e1e1e] p-6 rounded-3xl aspect-[6/4] flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
          <div className="card-border"></div>
          <div className="card-glow"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex-grow flex items-center justify-center mb-4">
              <Image
                src={image}
                alt={title}
                width={120}
                height={120}
                className="object-contain max-w-full max-h-full transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-row gap-2">
        <h4 className="text-white text-lg font-medium mr-3">{title}</h4>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center text-gray-400 text-xs bg-[#1e1e1e] rounded-full px-2 transition-colors duration-300 hover:bg-white hover:text-[#1e1e1e] border border-gray-800"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-400 text-md line-clamp-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
