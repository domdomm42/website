"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, tags }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, rgba(17, 24, 39, 0) 30%)`,
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-[#292929] p-6 rounded-2xl aspect-[4/3] flex flex-col overflow-hidden group"
    >
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={gradientStyle}
      />
      <div className="relative z-10 flex flex-col h-full">
        <Image
          src={image}
          alt={title}
          width={64}
          height={64}
          className="mb-auto"
        />
        <h4 className="text-white text-lg mb-2 font-light">{title}</h4>
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
