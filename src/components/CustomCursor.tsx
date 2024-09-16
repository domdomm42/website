"use client";

import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailingCursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchCapability = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchCapability();
    window.addEventListener('resize', checkTouchCapability);

    return () => {
      window.removeEventListener('resize', checkTouchCapability);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const trailingCursor = trailingCursorRef.current;

    if (!cursor || !trailingCursor) return;

    const updateCursorPosition = (e: MouseEvent) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      cursor.style.setProperty("--cursor-x", x);
      cursor.style.setProperty("--cursor-y", y);

      // Use requestAnimationFrame for the trailing cursor
      requestAnimationFrame(() => {
        trailingCursor.style.setProperty("--cursor-x", x);
        trailingCursor.style.setProperty("--cursor-y", y);
      });

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const updateCursorState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.getAttribute("role") === "button" ||
        target.closest("[data-cursor-hover]") !== null; // Check for project cards
      cursor.classList.toggle("hovering", isHoverable);
      trailingCursor.classList.toggle("hovering", isHoverable);
    };

    const handleMouseDown = () => {
      cursor.classList.add("clicking");
      trailingCursor.classList.add("clicking");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("clicking");
      trailingCursor.classList.remove("clicking");
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", updateCursorState);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", updateCursorState);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isVisible ? "visible" : ""}`}
      />
      <div
        ref={trailingCursorRef}
        className={`custom-cursor trailing ${isVisible ? "visible" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
