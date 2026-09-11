"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoveLetter() {
  return (
    <section
      id="love-letter"
      className="relative overflow-hidden bg-[#fffaf7] px-5 py-20 text-slate-900 sm:px-8 sm:py-28 md:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/25 blur-[130px]" />

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-200/25 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-rose-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Chapter heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-rose-500 sm:text-xs sm:tracking-[0.5em]">
            Chapter 04
          </p>

          <Heart
            size={20}
            strokeWidth={1.4}
            className="mx-auto mb-6 fill-rose-100 text-rose-400"
          />

          <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            A letter
            <br />
            <span className="font-serif italic text-rose-500">
              for you
            </span>
          </h2>
        </motion.div>

        {/* Letter card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto max-w-4xl rounded-3xl border border-rose-100 bg-white/85 px-6 py-8 shadow-[0_15px_60px_rgba(190,24,93,0.07)] backdrop-blur-sm sm:px-10 sm:py-12 md:px-16 md:py-16"
        >
          {/* Decorative corners */}
          <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 rounded-tl-3xl border-l border-t border-rose-200 sm:h-20 sm:w-20" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-br-3xl border-b border-r border-rose-200 sm:h-20 sm:w-20" />

          {/* Letter content */}
          <div className="relative space-y-6 text-right text-[15px] leading-8 text-slate-600 sm:space-y-7 sm:text-base sm:leading-9 md:text-lg">
            <p className="font-display text-2xl text-rose-500 sm:text-3xl">
              يا ملك
            </p>

            <p>
              مش عارف أبدأ الكلام إزاي، بس كل اللي عارفه إن وجودك في حياتي
              بقى حاجة مختلفة بالنسبالي.
            </p>

            <p>
              من أول ما بدأنا نتكلم، وأنا مكنتش متخيل إن محادثة بسيطة ممكن
              تخلي شخص يبقى مهم بالشكل ده.
            </p>

            <p>
              يمكن مش دايمًا بعرف أقولك اللي جوايا، ويمكن ساعات الكلام
              بيقف مني، بس ده مش معناه إن مفيش كلام كتير نفسي أقولهولك.
            </p>

            <p>
              أنا بحب تفاصيلك، طريقتك، كلامك، وضحكتك، والحاجات الصغيرة اللي
              يمكن إنتِ نفسك مش واخدة بالك منها.
            </p>

            <p>
              وأكتر حاجة بحبها إنك بقيتي جزء من أيامي، من الحاجات اللي
              بستنى تحصل، ومن الحاجات اللي بتخليني أبتسم من غير سبب واضح.
            </p>

            <p>
              مش عايز أوعدك بكلام كبير، أنا بس عايزك تعرفي إنك شخص غالي
              عندي جدًا، وإن وجودك فرق معايا أكتر مما تتخيلي.
            </p>

            <p>
              ويمكن دي مجرد بداية، بس أنا مبسوط جدًا إن بدايتي كانت معاكي.
            </p>

            {/* Signature */}
            <div className="border-t border-rose-100 pt-7 text-right">
              <p className="font-display text-2xl italic text-slate-900 sm:text-3xl">
                Happy birthday, my Malooka.
              </p>

              <div className="mt-5 flex items-center justify-end gap-3">
                <span className="h-px w-10 bg-rose-200" />

                <p className="text-sm text-rose-400">
                  — Adel
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-rose-200" />

          <Heart
            size={15}
            className="fill-rose-300 text-rose-400"
          />

          <span className="h-px w-12 bg-rose-200" />
        </motion.div>
      </div>
    </section>
  );
}