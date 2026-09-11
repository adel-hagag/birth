"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

import { birthdayContent } from "@/data/content";

type BeginningProps = {
  language: "en" | "ar";
};

export default function Beginning({ language }: BeginningProps) {
  const isArabic = language === "ar";

  return (
    <section
      id="beginning"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#fffaf7] px-5 py-24 text-slate-900 sm:px-8 md:py-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={isArabic ? "text-right" : "text-left"}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-rose-400" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-rose-500">
                {isArabic ? "الفصل الأول" : birthdayContent.beginning.eyebrow}
              </p>

              <Sparkles className="h-4 w-4 text-rose-400" />
            </div>

            <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-slate-900 sm:text-7xl md:text-8xl">
              {isArabic ? (
                <>
                  <span className="block text-slate-900">البداية</span>
                  <span className="mt-3 block font-serif text-4xl italic text-rose-500 sm:text-5xl">
                    حكايتنا
                  </span>
                </>
              ) : (
                <>
                  <span className="block">The</span>
                  <span className="mt-3 block font-serif text-6xl italic text-rose-500 sm:text-7xl md:text-8xl">
                    Beginning
                  </span>
                </>
              )}
            </h2>

            <div
              className={`mt-8 flex items-center gap-3 ${
                isArabic ? "justify-end" : "justify-start"
              }`}
            >
              <Heart className="h-4 w-4 fill-rose-400 text-rose-400" />

              <span className="text-xs tracking-[0.2em] text-slate-400">
                {isArabic ? "من هنا بدأت الحكاية" : "Where our story began"}
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className={`relative rounded-3xl border border-rose-100 bg-white/80 p-7 shadow-[0_20px_70px_rgba(190,24,93,0.08)] backdrop-blur-sm sm:p-10 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {/* Vertical accent */}
            <div
              className={`absolute top-8 h-20 w-1 rounded-full bg-gradient-to-b from-rose-400 to-pink-200 ${
                isArabic ? "right-0" : "left-0"
              }`}
            />

            <p className="font-display text-2xl leading-relaxed text-rose-500 sm:text-3xl">
              {birthdayContent.story.beginning}
            </p>

            <div className="my-7 flex items-center gap-3">
              <span className="h-px w-16 bg-rose-200" />
              <Heart className="h-3.5 w-3.5 fill-rose-300 text-rose-300" />
              <span className="h-px w-8 bg-rose-100" />
            </div>

            <p className="max-w-xl text-sm leading-8 text-slate-500 sm:text-base">
              {isArabic
                ? "كل حكاية جميلة ليها لحظة بداية. وحكايتنا بدأت بحاجة بسيطة... مجرد محادثة."
                : birthdayContent.beginning.description}
            </p>

            <p className="mt-8 font-display text-2xl italic leading-relaxed text-slate-800 sm:text-3xl">
              {isArabic ? (
                <>
                  محادثة واحدة.
                  <br />
                  بداية غير متوقعة.
                  <br />
                  وحكاية لسه بتتكتب.
                </>
              ) : (
                <>
                  One conversation.
                  <br />
                  One unexpected beginning.
                  <br />
                  And a story still being written.
                </>
              )}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="h-px w-8 bg-rose-300" />

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-rose-400">
                — Adel
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}