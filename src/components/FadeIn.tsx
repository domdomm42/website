"use client";
import React from 'react';
import { useInView } from '@/hooks/useInView';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  mobileDelay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, mobileDelay }) => {
  const { ref, isInView } = useInView();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const actualDelay = isMobile && mobileDelay !== undefined ? mobileDelay : delay;

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${actualDelay}ms` }}
    >
      {children}
    </div>
  );
};
