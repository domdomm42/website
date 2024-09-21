"use client";
import { useState, useEffect, useRef } from "react";

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenSeen) {
        setIsInView(true);
        setHasBeenSeen(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, hasBeenSeen]);

  return { ref, isInView };
}
