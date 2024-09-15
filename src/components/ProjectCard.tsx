"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import switchOn from "../../public/switch-on.mp3";
import useSound from "use-sound";

interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
  description: string;
  link: string;
  accentColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  tags,
  description,
  link,
}) => {
  const soundUrl = switchOn;
  const [play] = useSound(soundUrl);
  return (
    <Link
      href={link}
      target="_blank"
      className="block group"
      data-cursor-hover
      onMouseEnter={() => play()}
    >
      <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] opacity-70"></div>
        </div>
        <div className="p-6 relative">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#2a2a2a] text-gray-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
