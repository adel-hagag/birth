"use client";

import { motion } from "framer-motion";
import { Gift, Heart, Star } from "lucide-react";

type FinalSectionProps = {
  language: "en" | "ar";
};

export default function FinalSection({
  language,
}: FinalSectionProps) {
  const isArabic = language === "ar";

  return (
    <section
      id="final-section"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#fffaf7] px-5 py-24 text-slate-900 sm:px-8 sm:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        {/* Small label */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-rose-300 sm:w-12" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-500 sm:text-xs sm:tracking-[0.4em]">
            {isArabic ? "الفصل الأخير" : "The Final Chapter"}
          </p>

          <span className="h-px w-8 bg-rose-300 sm:w-12" />
        </div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-400 shadow-[0_10px_35px_rgba(190,24,93,0.08)]"
        >
          <Gift size={31} strokeWidth={1.4} />
        </motion.div>

        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-5xl leading-[1.08] tracking-tight text-slate-900 sm:text-6xl md:text-8xl"
        >
          {isArabic ? (
            <>
              عيد ميلاد سعيد
              <br />
              <span className="font-serif italic text-rose-500">
                يا ملوووكتي
              </span>
            </>
          ) : (
            <>
              Happy
              <br />
              <span className="font-serif italic text-rose-500">
                17th Birthday
              </span>
            </>
          )}
        </motion.h2>

        {/* Birthday message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base md:text-lg"
        >
          {isArabic
            ? "كل سنة وإنتِ طيبة يا أجمل حاجة حصلتلي. أتمنى سنتك الـ17 تكون مليانة فرحة ونجاح وضحك وأيام حلوة شبه قلبك. ويارب أفضل دايمًا أشوفك مبسوطة وأكون سبب في ابتسامتك."
            : "Happy 17th birthday to the sweetest part of my life. I hope this year brings you endless smiles, beautiful memories, success, and everything your heart wishes for. You deserve all the happiness in the world."}
        </motion.p>

        {/* Highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mt-10 max-w-xl rounded-3xl border border-rose-100 bg-white/80 px-6 py-7 shadow-[0_15px_50px_rgba(190,24,93,0.07)] backdrop-blur-sm sm:px-10"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-rose-400">
            <Star size={15} className="fill-rose-200" />
            <Star size={20} className="fill-rose-300" />
            <Star size={15} className="fill-rose-200" />
          </div>

          <p className="font-serif text-xl italic leading-relaxed text-slate-800 sm:text-2xl">
            {isArabic ? (
              <>
                "لسه في حاجات كتير حلوة مستنيانا،
                <br />
                ودي مجرد بداية حكايتنا."
              </>
            ) : (
              <>
                "There are still so many beautiful moments
                <br />
                waiting for us."
              </>
            )}
          </p>
        </motion.div>

        {/* Final line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-rose-400">
            {isArabic ? "من قلبي ليكي" : "Made with love, just for you"}
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-rose-200" />

            <Heart
              size={19}
              className="fill-rose-400 text-rose-400"
            />

            <span className="h-px w-12 bg-rose-200" />
          </div>

          <p className="mt-5 font-serif text-lg italic text-slate-500">
            {isArabic ? "بحبك يا ملككك ❤️" : "I love you, Malak ❤️"}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}