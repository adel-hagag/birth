"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Moon } from "lucide-react";

import { birthdayContent } from "@/data/content";

const qualities = [
  {
    icon: Heart,
    title: {
      en: "Your Heart",
      ar: "قلبك",
    },
    text: {
      en: "The kindness in you makes everything around you feel warmer.",
      ar: "طيبة قلبك بتخلي كل حاجة حواليكي تحس إنها أدفى وأجمل.",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Your Smile",
      ar: "ضحكتك",
    },
    text: {
      en: "Some smiles are beautiful. Yours feels like a whole moment.",
      ar: "في ضحكات بتكون جميلة، بس ضحكتك بالنسبالي لحظة كاملة.",
    },
  },
  {
    icon: Star,
    title: {
      en: "Your Presence",
      ar: "وجودك",
    },
    text: {
      en: "You have a way of making ordinary moments feel a little more special.",
      ar: "عندك طريقة بتخلي حتى اللحظات العادية تحس إنها مميزة أكتر.",
    },
  },
  {
    icon: Moon,
    title: {
      en: "Simply You",
      ar: "إنتِ وبس",
    },
    text: {
      en: "No complicated reason. No perfect words. I just love the person you are.",
      ar: "مفيش سبب معقد، ومفيش كلام مثالي. أنا بس بحبك زي ما إنتِ.",
    },
  },
];

type HerSectionProps = {
  language: "en" | "ar";
};

export default function HerSection({ language }: HerSectionProps) {
  const isArabic = language === "ar";

  return (
    <section
      id="her"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#fffaf7] px-5 py-24 text-slate-900 sm:px-8 md:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-rose-300 sm:w-12" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-500 sm:text-xs sm:tracking-[0.4em]">
              {isArabic ? "الفصل الثاني" : "Chapter 02"}
            </p>

            <span className="h-px w-8 bg-rose-300 sm:w-12" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl leading-[0.95] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {isArabic ? (
              <>
                البنت اللي ورا
                <br />
                <span className="font-serif italic text-rose-500">
                  أجمل حكاية.
                </span>
              </>
            ) : (
              <>
                The girl behind
                <br />
                <span className="font-serif italic text-rose-500">
                  my favorite story.
                </span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base"
          >
            {isArabic
              ? `في حاجات كتير بتخليكي مميزة يا ${birthdayContent.nickname}. في حاجات سهلة أشرحها، وحاجات تانية مجرد إحساس عمري ما عرفت أوصفه بالكلام.`
              : `There are so many things that make you special, ${birthdayContent.nickname}. Some of them are easy to explain. Some of them are just feelings I never really knew how to put into words.`}
          </motion.p>
        </div>

        {/* Big name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="my-16 overflow-hidden text-center sm:my-20 md:my-28"
        >
          <p className="select-none font-serif text-[25vw] font-bold leading-none tracking-[-0.08em] text-rose-500/[0.07] sm:text-[20vw] md:text-[15vw]">
            ASH
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {qualities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title.en}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-rose-100 bg-white/85 p-6 shadow-[0_12px_40px_rgba(190,24,93,0.06)] backdrop-blur-sm transition-all duration-500 hover:border-rose-200 hover:shadow-[0_18px_50px_rgba(190,24,93,0.12)] sm:p-8 md:p-10"
              >
                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-rose-100/60 blur-2xl transition duration-500 group-hover:bg-rose-200/70" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-rose-50 text-rose-500">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <span className="text-xs font-medium tracking-[0.25em] text-rose-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-slate-900 sm:text-4xl">
                    {isArabic ? item.title.ar : item.title.en}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                    {isArabic ? item.text.ar : item.text.en}
                  </p>

                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-px w-8 bg-rose-300" />
                    <Heart
                      size={12}
                      className="fill-rose-300 text-rose-300"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Ending quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-20 max-w-4xl text-center sm:mt-24 md:mt-32"
        >
          <Heart
            size={18}
            strokeWidth={1.5}
            className="mx-auto mb-7 fill-rose-200 text-rose-400"
          />

          <p className="font-display text-2xl italic leading-relaxed text-slate-800 sm:text-3xl md:text-5xl">
            {isArabic ? (
              <>
                يمكن مقدرش أشرح كل حاجة
                <br />
                بشوفها فيكي.
                <br />
                <span className="text-rose-500">
                  بس عارف إن حياتي بقت أجمل شوية من يوم ما عرفتك.
                </span>
              </>
            ) : (
              <>
                Maybe I can&apos;t explain everything I see in you.
                <br />
                But I know life became a little more beautiful
                <br />
                <span className="text-rose-500">
                  after I met you.
                </span>
              </>
            )}
          </p>

          <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.35em] text-rose-400">
            — Adel
          </p>
        </motion.div>
      </div>
    </section>
  );
}