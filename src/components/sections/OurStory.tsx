"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const storyItems = [
  {
    date: "11.06.2026",
    number: "01",
    title: {
      en: "The First Hello",
      ar: "أول سلام",
    },
    description: {
      en: "It started with a conversation. Nothing complicated. Nothing planned. Just two people talking for the first time.",
      ar: "بدأت الحكاية بمحادثة. مفيش حاجة معقدة، ومفيش حاجة كانت مترتبة. مجرد شخصين بيتكلموا لأول مرة.",
    },
  },
  {
    date: {
      en: "A LITTLE LATER",
      ar: "بعد شوية",
    },
    number: "02",
    title: {
      en: "Something Changed",
      ar: "حاجة اتغيرت",
    },
    description: {
      en: "Some conversations end when the screen goes dark. Ours somehow made me want to come back and talk again.",
      ar: "في محادثات بتنتهي أول ما الشاشة تقفل. محادثتنا خلتني بطريقة ما عايز أرجع وأتكلم معاكي تاني.",
    },
  },
  {
    date: {
      en: "EVERY LITTLE MOMENT",
      ar: "كل لحظة صغيرة",
    },
    number: "03",
    title: {
      en: "Getting To Know You",
      ar: "بقيت أعرفك أكتر",
    },
    description: {
      en: "Little details started becoming my favorite things. Your words, your smile, your way of being you.",
      ar: "التفاصيل الصغيرة بدأت تبقى من أكتر الحاجات اللي بحبها. كلامك، وضحكتك، وطريقتك وإنتِ على طبيعتك.",
    },
  },
  {
    date: {
      en: "STILL WRITING",
      ar: "لسه بنكتب",
    },
    number: "04",
    title: {
      en: "Our Story",
      ar: "حكايتنا",
    },
    description: {
      en: "This isn't the end of the story. It's barely the beginning. And that's probably my favorite part.",
      ar: "دي مش نهاية الحكاية. دي لسه البداية. ودي يمكن أكتر حاجة بحبها في قصتنا.",
    },
  },
];

type OurStoryProps = {
  language: "en" | "ar";
};

export default function OurStory({ language }: OurStoryProps) {
  const isArabic = language === "ar";

  return (
    <section
      id="our-story"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#fffaf7] px-5 py-24 text-slate-900 sm:px-8 md:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-rose-200/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-pink-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center sm:mb-28 md:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-rose-300 sm:w-12" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-500 sm:text-xs sm:tracking-[0.45em]">
              {isArabic ? "الفصل الثالث" : "Chapter 03"}
            </p>

            <span className="h-px w-8 bg-rose-300 sm:w-12" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-display text-6xl leading-[0.95] tracking-tight text-slate-900 sm:text-7xl md:text-8xl"
          >
            {isArabic ? (
              <span className="font-serif italic text-rose-500">
                حكايتنا
              </span>
            ) : (
              <>
                Our
                <br />
                <span className="font-serif italic text-rose-500">
                  Story
                </span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mt-7 max-w-md text-sm leading-8 text-slate-500 sm:text-base"
          >
            {isArabic
              ? "في لحظات بتكون أجمل من إنها تتنسي."
              : "Some moments are too beautiful to be left behind."}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-rose-200 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {storyItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className={`relative mb-20 grid items-start last:mb-0 md:mb-32 md:grid-cols-2 ${
                  isEven ? "" : "md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-1 z-10 -translate-x-1/2 md:left-1/2">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-[#fffaf7] shadow-[0_0_0_6px_rgba(255,250,247,0.9)]"
                  >
                    <div className="h-2 w-2 rounded-full bg-rose-400" />
                  </motion.div>
                </div>

                {/* Date */}
                <div
                  className={`pl-16 md:pl-0 ${
                    isEven
                      ? "md:pr-20 md:text-right"
                      : "md:order-2 md:pl-20 md:text-left"
                  }`}
                >
                  <p className="font-display text-3xl leading-tight text-rose-400 sm:text-4xl md:text-5xl">
                    {typeof item.date === "string"
                      ? item.date
                      : isArabic
                        ? item.date.ar
                        : item.date.en}
                  </p>
                </div>

                {/* Story content */}
                <div
                  className={`mt-7 pl-16 md:mt-0 ${
                    isEven
                      ? "md:pl-20"
                      : "md:order-1 md:pr-20 md:text-right"
                  }`}
                >
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-400">
                    {item.number}
                  </p>

                  <h3 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                    {isArabic ? item.title.ar : item.title.en}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-8 text-slate-500 sm:text-base">
                    {isArabic
                      ? item.description.ar
                      : item.description.en}
                  </p>

                  <div
                    className={`mt-6 flex items-center gap-2 ${
                      isEven
                        ? "justify-start md:justify-start"
                        : "justify-start md:justify-end"
                    }`}
                  >
                    <span className="h-px w-8 bg-rose-200" />
                    <Heart
                      size={12}
                      className="fill-rose-200 text-rose-300"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Ending */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-24 max-w-3xl text-center sm:mt-32"
        >
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-rose-100 bg-white text-rose-400 shadow-[0_8px_30px_rgba(190,24,93,0.07)]">
            <Sparkles size={19} strokeWidth={1.5} />
          </div>

          <p className="font-display text-3xl italic leading-relaxed text-slate-800 sm:text-4xl md:text-5xl">
            {isArabic ? (
              <>
                وأجمل حاجة؟
                <br />
                <span className="text-rose-500">
                  إننا لسه بنكتبها.
                </span>
              </>
            ) : (
              <>
                And the best part?
                <br />
                <span className="text-rose-500">
                  We&apos;re still writing it.
                </span>
              </>
            )}
          </p>

          <Heart
            size={16}
            strokeWidth={1.5}
            className="mx-auto mt-8 fill-rose-200 text-rose-400"
          />
        </motion.div>
      </div>
    </section>
  );
}