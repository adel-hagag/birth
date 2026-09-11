"use client";

import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Sparkles,
  Star,
  Image as ImageIcon,
} from "lucide-react";

type ChatMemoriesProps = {
  language: "en" | "ar";
};

const chatImages = [
  {
    id: 1,
    src: "/images/chat-1.jpeg",
    arText: "أجمل حاجة حصلتلي إنك بقيتي جزء من يومي ❤️",
    enText: "The best thing that happened to me is having you in my days ❤️",
  },
  {
    id: 2,
    src: "/images/chat-2.jpeg",
    arText: "كل رسالة منك بتخلّي يومي أحلى بكتير.",
    enText: "Every message from you makes my day so much better.",
  },
  {
    id: 3,
    src: "/images/chat-3.jpeg",
    arText: "بحب تفاصيل كلامنا حتى لو كانت عن أبسط حاجة.",
    enText: "I love every detail of our conversations, even the simplest things.",
  },
  {
    id: 4,
    src: "/images/chat-4.jpeg",
    arText: "ضحكتك من خلال الشات لوحدها كفاية تغيّر مود يوم كامل.",
    enText: "Your laugh through the chat is enough to change my whole day.",
  },
  {
    id: 5,
    src: "/images/chat-5.jpeg",
    arText: "معاكي حتى الكلام العادي بيبقى له معنى مختلف.",
    enText: "With you, even ordinary conversations feel special.",
  },
  {
    id: 6,
    src: "/images/chat-6.jpeg",
    arText: "كل مرة بتكلمك فيها بحس إني محظوظ أكتر.",
    enText: "Every time I talk to you, I feel luckier than before.",
  },
  {
    id: 7,
    src: "/images/chat-7.jpeg",
    arText: "مش مجرد شات، دي ذكريات صغيرة بحب أرجعلها.",
    enText: "These are not just chats, but little memories I love returning to.",
  },
  {
    id: 8,
    src: "/images/chat-8.jpeg",
    arText: "وأجمل رسالة لسه هي كل سنة وإنتي حبيبتي.",
    enText: "And the sweetest message will always be: happy birthday, my love.",
  },
];

export default function ChatMemories({
  language,
}: ChatMemoriesProps) {
  const isArabic = language === "ar";

  return (
    <section
      id="chat-memories"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#050509] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-pink-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500/70" />
            <MessageCircle className="h-5 w-5 text-pink-400" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500/70" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {isArabic ? "ذكريات من شاتنا" : "Our Chat Memories"}
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
            {isArabic
              ? "رسائل بسيطة، لكنها شايلة جواها أحلى تفاصيل بينا."
              : "Simple messages carrying some of the sweetest little moments between us."}
          </p>
        </motion.div>

        {/* Chat cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {chatImages.map((chat, index) => (
            <motion.article
              key={chat.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -8,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-pink-500/10 bg-[#0d0b14] p-3 shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:border-pink-400/30 hover:bg-[#120d1b]"
            >
              {/* Small decorative icons */}
              <div className="absolute right-5 top-5 z-10 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 backdrop-blur-md">
                <Heart className="h-3 w-3 fill-pink-400 text-pink-400" />
                <span className="text-[10px] font-medium text-white/70">
                  {chat.id}
                </span>
              </div>

              {/* Image frame */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08070d] p-2">
                {/* Tape effect */}
                <div className="pointer-events-none absolute left-1/2 top-[-9px] z-10 h-7 w-24 -translate-x-1/2 rotate-[-4deg] bg-pink-500/35 backdrop-blur-sm" />

                <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-xl bg-black sm:min-h-[300px]">
                  <img
                    src={chat.src}
                    alt={isArabic ? `ذكرى شات ${chat.id}` : `Chat memory ${chat.id}`}
                    className="h-auto max-h-[480px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text area */}
              <div className="px-2 pb-2 pt-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10">
                    <Sparkles className="h-4 w-4 text-pink-400" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-pink-300">
                      {isArabic ? "ذكرى صغيرة" : "A little memory"}
                    </p>
                    <p className="text-[10px] text-white/35">
                      {isArabic ? "من أجمل أيامنا" : "One of our sweet moments"}
                    </p>
                  </div>
                </div>

                <p className="min-h-[72px] text-sm leading-7 text-white/75">
                  {isArabic ? chat.arText : chat.enText}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-pink-400 text-pink-400" />
                    <Star className="h-3.5 w-3.5 fill-pink-400 text-pink-400" />
                    <Star className="h-3.5 w-3.5 fill-pink-400 text-pink-400" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                    {isArabic ? "ملك × عادل" : "Malak × Adel"}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-3 text-center"
        >
          <Heart className="h-4 w-4 shrink-0 fill-pink-500 text-pink-500" />

          <p className="text-sm leading-7 text-white/50 sm:text-base">
            {isArabic
              ? "كل شات بينا كان بيضيف حتة جديدة لحكايتنا."
              : "Every conversation added a new little piece to our story."}
          </p>

          <Heart className="h-4 w-4 shrink-0 fill-pink-500 text-pink-500" />
        </motion.div>
      </div>
    </section>
  );
}