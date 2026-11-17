"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  language: "en" | "ar";
};

const TARGET_DATE = new Date("2026-09-28T00:00:00").getTime();

const calculateTimeLeft = (): TimeLeft => {
  const difference = TARGET_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function Countdown({ language }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [surpriseOpened, setSurpriseOpened] = useState(false);

  const isArabic = language === "ar";

  const units = [
    {
      key: "days" as const,
      en: "Days",
      ar: "يوم",
    },
    {
      key: "hours" as const,
      en: "Hours",
      ar: "ساعة",
    },
    {
      key: "minutes" as const,
      en: "Minutes",
      ar: "دقيقة",
    },
    {
      key: "seconds" as const,
      en: "Seconds",
      ar: "ثانية",
    },
  ];

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  if (!timeLeft) {
    return null;
  }

  const isBirthday =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section
      id="countdown"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#050509] px-5 py-24 text-white sm:px-8 md:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute bottom-[-150px] left-[-120px] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute right-[-120px] top-[-150px] h-[350px] w-[350px] rounded-full bg-rose-600/10 blur-[130px]" />
      </div>

      {/* Floating hearts and sparkles */}
      {isBirthday && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                x: `${(index * 37) % 100}%`,
                scale: 0.5,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, -500],
                rotate: [0, 25, -25, 0],
                scale: [0.5, 1, 0.8],
              }}
              transition={{
                duration: 5 + (index % 4),
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute bottom-0 text-pink-400/70"
            >
              {index % 3 === 0 ? (
                <Sparkles className="h-5 w-5" />
              ) : (
                <Heart className="h-5 w-5 fill-current" />
              )}
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-pink-500/60 sm:w-16" />

          <p className="text-[10px] uppercase tracking-[0.35em] text-pink-300/70 sm:text-xs sm:tracking-[0.5em]">
            {isBirthday
              ? isArabic
                ? "اليوم المنتظر"
                : "The Special Day"
              : isArabic
                ? "الفصل الخامس"
                : "Chapter 05"}
          </p>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-pink-500/60 sm:w-16" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl leading-[1.15] text-white sm:text-6xl md:text-8xl"
        >
          {isBirthday ? (
            <>
              {isArabic ? (
                <>
                  النهارده

                  <br />

                  <span className="italic text-pink-300">
                    يومك يا حبيبتي.
                  </span>
                </>
              ) : (
                <>
                  Today is

                  <br />

                  <span className="italic text-pink-300">
                    your special day.
                  </span>
                </>
              )}
            </>
          ) : isArabic ? (
            <>
              بنعد الأيام

              <br />

              <span className="italic text-pink-300">ليومك.</span>
            </>
          ) : (
            <>
              Counting down

              <br />

              <span className="italic text-pink-300">to your day.</span>
            </>
          )}
        </motion.h2>

        {/* Countdown / Birthday Surprise */}
        {isBirthday ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="mx-auto mb-6 h-20 w-20 fill-pink-500 text-pink-500 sm:h-24 sm:w-24" />
            </motion.div>

            <h3 className="font-display text-4xl text-pink-300 sm:text-6xl">
              {isArabic
                ? "كل سنة وإنتي حبيبتي ❤️"
                : "Happy Birthday, My Love ❤️"}
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/60 sm:text-lg">
              {isArabic
                ? "النهارده مش يوم عادي، النهارده اليوم اللي اتولدت فيه أجمل حاجة حصلتلي."
                : "Today is not just another day. It is the day the most beautiful part of my life was born."}
            </p>

            {!surpriseOpened ? (
              <motion.button
                type="button"
                onClick={() => setSurpriseOpened(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="mx-auto mt-10 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(236,72,153,0.35)] transition-all sm:px-10 sm:py-5 sm:text-base"
              >
                <Gift className="h-5 w-5" />

                {isArabic ? "افتحي مفاجأتك 🎁" : "Open Your Surprise 🎁"}
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mx-auto mt-10 max-w-3xl rounded-3xl border border-pink-400/20 bg-white/[0.04] px-6 py-8 shadow-[0_15px_60px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:px-10 sm:py-12"
              >
                <Sparkles className="mx-auto mb-5 h-8 w-8 text-pink-300" />

                <h4 className="font-display text-3xl text-pink-200 sm:text-5xl">
                  {isArabic
                    ? "إنتي أجمل هدية في حياتي 🎁"
                    : "You Are My Favorite Gift 🎁"}
                </h4>

                <p className="mt-6 text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
                  {isArabic
                    ? "كل سنة وإنتي معايا، وكل سنة وضحكتك منورة حياتي. أتمنى أكون سبب في فرحتك زي ما إنتي سبب في كل حاجة حلوة جوايا. بحبك أكتر مما الكلام يقدر يوصف."
                    : "Every year with you is another beautiful chapter of my life. I hope I can make you smile the way you make my world brighter. I love you more than words could ever explain."}
                </p>

                <div className="mt-7 flex items-center justify-center gap-2 text-pink-300">
                  <Heart className="h-4 w-4 fill-current" />

                  <span className="text-sm">
                    {isArabic
                      ? "بحبك يا ❣️آش♾️ ❤️"
                      : "I love you, my angel ❤️"}
                  </span>

                  <Heart className="h-4 w-4 fill-current" />
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:mt-20 sm:gap-5 md:grid-cols-4"
          >
            {units.map((unit, index) => (
              <motion.div
                key={unit.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-pink-500/15 bg-[#0d0b14]/90 px-3 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-md sm:rounded-3xl sm:px-5 sm:py-9"
              >
                <motion.p
                  key={timeLeft[unit.key]}
                  initial={{ opacity: 0.35, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-4xl tabular-nums text-white sm:text-6xl md:text-7xl"
                >
                  {String(timeLeft[unit.key]).padStart(2, "0")}
                </motion.p>

                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-pink-300/60 sm:text-xs sm:tracking-[0.3em]">
                  {isArabic ? unit.ar : unit.en}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Date and footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 sm:mt-16"
        >
          <div className="mx-auto mb-5 h-px w-16 bg-pink-500/30" />

          <div className="flex items-center justify-center gap-2 text-pink-300">
            <Sparkles className="h-4 w-4" />

            <p className="font-display text-2xl sm:text-4xl">
              23.02.2023
            </p>

            <Sparkles className="h-4 w-4" />
          </div>

          <p className="mt-4 text-xs text-white/35 sm:text-sm">
            {isBirthday
              ? isArabic
                ? "أجمل يوم في السنة ❤️"
                : "The most beautiful day of the year ❤️"
              : isArabic
                ? "اليوم اللي مستنيينه."
                : "The day we're waiting for."}
          </p>

          <Heart className="mx-auto mt-7 h-4 w-4 fill-pink-500 text-pink-500" />
        </motion.div>
      </div>
    </section>
  );
}