"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import switchOn from "../../public/switch-on.mp3";
import bubbleSound from "../../public/bubble.mp3";
import useSound from "use-sound";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
  accentColor?: string;
  badge?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  link,
  badge,
}) => {
  const [play] = useSound(switchOn, { volume: 0.3 });
  const [bubble] = useSound(bubbleSound, { volume: 0.7 });

  return (
    <Link
      href={link}
      target="_blank"
      className="block group h-full"
      data-cursor-hover
      onMouseEnter={() => play()}
      onClick={() => bubble()}
    >
      <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
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
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            {badge && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-gray-700">
                {badge}
              </span>
            )}
          </div>
          <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
