"use client";
import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, tags }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="project-card relative bg-[#292929] p-6 rounded-3xl aspect-[4/3] flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
        <div className="card-border"></div>
        <div className="card-glow"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-grow flex items-center justify-center mb-4">
            <Image
              src={image}
              alt={title}
              width={150}
              height={150}
              className="object-contain max-w-full max-h-full transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-white text-xl mb-2 font-light">{title}</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-gray-400 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
