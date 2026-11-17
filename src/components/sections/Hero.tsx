"use client";

import { motion } from "framer-motion";
import { ArrowDown, Heart, Sparkles } from "lucide-react";

import { birthdayContent } from "@/data/content";

type HeroProps = {
  language: "en" | "ar";
};

export default function Hero({ language }: HeroProps) {
  const isArabic = language === "ar";

  const scrollToBeginning = () => {
    document
      .getElementById("beginning")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fffaf7] px-5 py-24 text-slate-900 sm:px-8"
    >
      {/* Soft background lights */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/35 blur-3xl sm:h-[500px] sm:w-[500px]" />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-pink-200/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-rose-200/25 blur-3xl" />

      {/* Decorative rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute h-[280px] w-[280px] rounded-full border border-rose-300/25 sm:h-[450px] sm:w-[450px] md:h-[560px] md:w-[560px]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 75,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute h-[390px] w-[390px] rounded-full border border-pink-300/20 sm:h-[600px] sm:w-[600px] md:h-[720px] md:w-[720px]"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Heart badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-rose-200 bg-white/80 text-rose-500 shadow-[0_8px_30px_rgba(190,24,93,0.08)] backdrop-blur-sm sm:mb-9 sm:h-14 sm:w-14"
        >
          <Heart
            size={20}
            strokeWidth={1.5}
            className="fill-rose-100 sm:h-[22px] sm:w-[22px]"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-3 sm:mb-8"
        >
          <span className="h-px w-8 bg-rose-300 sm:w-12" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-500 sm:text-xs sm:tracking-[0.45em]">
            {isArabic
              ? "عالم صغير صُنع من أجلك"
              : "A little world made for you"}
          </p>

          <span className="h-px w-8 bg-rose-300 sm:w-12" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 1,
            ease: "easeOut",
          }}
          className="font-display text-6xl leading-[0.95] tracking-tight text-slate-900 sm:text-8xl md:text-[9rem]"
        >
          {isArabic ? "إلى" : "For"}

          <br />

          <span className="font-serif italic text-rose-500">
            {birthdayContent.herName}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.85,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-8 sm:mt-10"
        >
          <p className="font-display text-2xl italic text-rose-500 sm:text-3xl">
            {isArabic
              ? `آش❣️♾️ ${birthdayContent.nickname}`
              : `My ${birthdayContent.nickname}.`}
          </p>

          <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-slate-500 sm:max-w-md sm:text-base sm:leading-8">
            {isArabic ? (
              <>
                بعض القصص تُكتب في الكتب.
                <br />
                وقصتنا تُكتب في اللحظات الصغيرة.
              </>
            ) : (
              <>
                Some stories are written in books.
                <br />
                Ours is written in little moments.
              </>
            )}
          </p>
        </motion.div>

        {/* Discover button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.15,
            duration: 0.8,
          }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToBeginning}
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-rose-200 bg-white/80 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-[0_8px_30px_rgba(190,24,93,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-rose-300 hover:text-rose-500 hover:shadow-[0_12px_35px_rgba(190,24,93,0.12)] sm:mt-12 sm:px-7 sm:py-4 sm:text-xs"
        >
          {isArabic ? "اكتشف قصتنا" : "Discover our story"}

          <ArrowDown
            size={15}
            strokeWidth={1.5}
            className="text-rose-400 transition-transform duration-300 group-hover:translate-y-1"
          />
        </motion.button>
      </div>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center sm:bottom-9"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-[10px] sm:tracking-[0.45em]">
          {isArabic ? "منذ" : "Since"}
        </p>

        <p className="mt-2 font-display text-sm text-rose-400 sm:text-base">
          {birthdayContent.story.beginning}
        </p>
      </motion.div>

      {/* Small decorative sparkle */}
      <Sparkles className="pointer-events-none absolute left-[12%] top-[28%] h-4 w-4 text-rose-300/70 sm:h-5 sm:w-5" />

      <Heart className="pointer-events-none absolute bottom-[22%] right-[12%] h-4 w-4 fill-rose-200/50 text-rose-300/60 sm:h-5 sm:w-5" />
    </section>
  );
}