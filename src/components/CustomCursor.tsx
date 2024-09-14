"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Get initial position from localStorage or use default
    const initialX = "0";
    const initialY = "0";
    cursor.style.setProperty("--cursor-x", initialX);
    cursor.style.setProperty("--cursor-y", initialY);

    const updateCursorPosition = (e: MouseEvent) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      cursor.style.setProperty("--cursor-x", x);
      cursor.style.setProperty("--cursor-y", y);
    };

    const updateCursorState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.getAttribute("role") === "button";
      cursor.classList.toggle("hovering", isHoverable);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", updateCursorState);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", updateCursorState);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
