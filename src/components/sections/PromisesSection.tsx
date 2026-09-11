"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

type PromisesSectionProps = {
  language: "en" | "ar";
};

const promises = [
  {
    en: "I promise to always listen to you.",
    ar: "أوعدك إني هفضل أسمعك دايمًا.",
  },
  {
    en: "I promise to celebrate every little victory with you.",
    ar: "أوعدك إني هفرح بكل نجاح صغير وكبير ليكي.",
  },
  {
    en: "I promise to remind you how special you are.",
    ar: "أوعدك إني هفكرك دايمًا قد إنتِ مميزة.",
  },
  {
    en: "I promise to choose you, every single day.",
    ar: "أوعدك إني هختارك كل يوم من جديد.",
  },
];

export default function PromisesSection({
  language,
}: PromisesSectionProps) {
  const isArabic = language === "ar";

  return (
    <section
      id="promises"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-white px-5 py-24 text-slate-900 sm:px-8 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-pink-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rose-200" />

            <Sparkles size={16} className="text-rose-400" />

            <span className="h-px w-10 bg-rose-200" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
            {isArabic ? "وعودي ليكي" : "Things I Promise You"}
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            {isArabic ? (
              <>
                حاجات أوعدك
                <br />
                <span className="italic text-rose-500">بيها يا ملاكي</span>
              </>
            ) : (
              <>
                Little promises,
                <br />
                <span className="italic text-rose-500">
                  forever and always
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-sm leading-8 text-slate-500 sm:text-base">
            {isArabic
              ? "مش مجرد كلام بيتقال، دي حاجات نفسي أفضل أعملها عشانك كل يوم."
              : "Not just words, but little things I want to keep doing for you every day."}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="rounded-3xl border border-rose-100 bg-[#fffaf7] p-6 shadow-[0_12px_35px_rgba(190,24,93,0.06)] sm:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <Heart size={19} className="fill-rose-300" />
              </div>

              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                {isArabic ? promise.ar : promise.en}
              </p>

              <div className="mt-5 flex items-center gap-2 text-rose-300">
                <Star size={13} className="fill-rose-200" />
                <span className="h-px w-12 bg-rose-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}