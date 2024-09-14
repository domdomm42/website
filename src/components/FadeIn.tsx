"use client";
import React, { useRef, useEffect, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 1000,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`transition-opacity ${className}`}
      style={{
        opacity: hasAnimated ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
