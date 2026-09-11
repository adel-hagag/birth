"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-5 left-5 z-50 flex h-15 w-15 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-lg shadow-rose-200/40 transition hover:-translate-y-1 hover:bg-rose-500 hover:text-white"
    >
      <Heart size={18} className="fill-current" />

      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-white">
        <ArrowUp size={12} />
      </span>
    </button>
  );
}