"use client";
import React, { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};
