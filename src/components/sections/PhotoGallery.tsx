"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  X,
} from "lucide-react";

type PhotoGalleryProps = {
  language: "en" | "ar";
};

const childhoodPhotos = [
  {
    id: 1,
    src: "/images/10.jpeg",
    alt: "ASH as a child",
  },

];

const grownUpPhotos = [
  {
    id: 3,
    src: "/images/11.jpeg",
    alt: "ASH",
  },
  {
    id: 4,
    src: "/images/12.jpeg",
    alt: "ASH",
  },
  {
    id: 5,
    src: "/images/13.jpeg",
    alt: "ASH",
  },
  {
    id: 6,
    src: "/images/14.jpeg",
    alt: "ASH",
  },
  {
    id: 7,
    src: "/images/15.jpeg",
    alt: "ASH",
  },
  {
    id: 8,
    src: "/images/16.jpeg",
    alt: "ASH",
  },
  {
    id: 9,
    src: "/images/17.jpeg",
    alt: "ASH",
  },
  {
    id: 10,
    src: "/images/18.jpeg",
    alt: "ASH",
  },
];

const allPhotos = [...childhoodPhotos, ...grownUpPhotos];

type Photo = (typeof allPhotos)[number];

export default function PhotoGallery({
  language,
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] =
    useState<Photo | null>(null);

  const isArabic = language === "ar";

  const selectedIndex = selectedPhoto
    ? allPhotos.findIndex(
        (photo) => photo.id === selectedPhoto.id
      )
    : -1;

  const showNext = () => {
    if (selectedIndex === -1) return;

    setSelectedPhoto(
      allPhotos[(selectedIndex + 1) % allPhotos.length]
    );
  };

  const showPrevious = () => {
    if (selectedIndex === -1) return;

    setSelectedPhoto(
      allPhotos[
        (selectedIndex - 1 + allPhotos.length) %
          allPhotos.length
      ]
    );
  };

  return (
    <section
      id="her-gallery"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#fff9fc] px-5 py-24 text-[#482b3b] sm:px-8 lg:px-16"
    >
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3 text-rose-400">
            <span className="h-px w-12 bg-rose-300" />
            <Heart size={18} fill="currentColor" />
            <span className="h-px w-12 bg-rose-300" />
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-rose-400">
            {isArabic ? "عن أجمل بنت" : "A little gallery of her"}
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#5b3045] sm:text-6xl">
            {isArabic
              ? "من طفلة جميلة لبنت تخطف القلب"
              : "From a little girl to my favorite person"}
          </h2>

          <p className="mt-6 text-base leading-8 text-[#8b6576] sm:text-lg">
            {isArabic
              ? "في كل مرحلة من عمرها كان فيها شيء مميز. طفولتها كانت مليانة براءة، وكبرها زادها جمالًا وحنية، لحد ما بقت أجمل حاجة حصلت في حياتي."
              : "Every stage of her life has had its own kind of beauty. Her childhood was full of innocence, and growing up only made her more beautiful, kind, and special to me."}
          </p>
        </motion.div>

        {/* Childhood section */}
        <div className="mb-24 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: isArabic ? 35 : -35,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
              {isArabic ? "الفصل الأول" : "Chapter one"}
            </span>

            <h3 className="mt-4 font-serif text-4xl text-[#61364c] sm:text-5xl">
              {isArabic ? "اش وهي صغيرة" : "Little Malak"}
            </h3>

            <p className="mt-6 text-lg leading-9 text-[#8b6576]">
              {isArabic
                ? "البنت الصغيرة اللي كانت لسه بتكتشف الدنيا، ومش عارفة إنها في يوم من الأيام هتبقى سبب في فرحة قلب حد بالشكل ده. البراءة اللي في عينيكي زمان لسه موجودة فيكي لحد دلوقتي، ودي من أكتر الحاجات اللي بحبها فيكي."
                : "The little girl who was still discovering the world had no idea that one day she would become someone’s greatest happiness. The innocence in your eyes is still there, and it is one of the things I love most about you."}
            </p>

            <div className="mt-8 rounded-2xl border border-rose-200 bg-white/70 p-5 text-[#704357] shadow-sm">
              <p className="font-serif text-xl italic leading-8">
                {isArabic
                  ? "كان واضح من زمان إنك هتبقي حاجة مميزة ❤️"
                  : "You were special long before you knew it. ❤️"}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {childhoodPhotos.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  rotate: index === 0 ? -2 : 2,
                }}
                className={[
                  "group relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_18px_45px_rgba(130,70,100,0.14)]",
                  index === 0
                    ? "rotate-[-2deg]"
                    : "rotate-[2deg]",
                ].join(" ")}
              >
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#321522]/60 to-transparent" />

                  <p className="absolute bottom-4 left-4 right-4 text-left text-sm leading-6 text-white">
                    {isArabic
                      ? [
                          "براءة صغيرة وجمال كبير",
                          "من وهي صغيرة وهي مميزة",
                        ][index]
                      : [
                          "A little innocence with a beautiful soul",
                          "She was special from the very beginning",
                        ][index]}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grown-up section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
              {isArabic ? "الفصل السادس" : "Chapter six"}
            </span>

            <h3 className="mt-4 font-serif text-4xl text-[#61364c] sm:text-5xl">
              {isArabic ? "اش دلوقتي" : "ASH today"}
            </h3>

            <p className="mt-5 text-lg leading-8 text-[#8b6576]">
              {isArabic
                ? "كبرتي، بس جمالك مش بس في شكلك. جمالك الحقيقي في روحك، في طيبتك، في ضحكتك، وفي الطريقة اللي بتخلي بيها يومي أحلى من غير ما تحاولي."
                : "You have grown up, but your beauty is not only in the way you look. It is in your soul, your kindness, your smile, and the way you make my days better without even trying."}
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {grownUpPhotos.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-2 text-left shadow-[0_18px_45px_rgba(130,70,100,0.13)]"
              >
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#321522]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <Heart size={17} fill="currentColor" />

                    <p className="mt-2 text-sm leading-6">
                      {isArabic
                        ? [
                            "في عينيكي تفاصيل أحبها",
                            "ضحكتك أجمل حاجة في يومي",
                            "كل مرة بشوفك بحبك أكتر",
                            "جمالك هادي ومميز زيك",
                            "أنتِ أجمل من أي كلام",
                            "وجودك لوحده بيخلّي الدنيا أجمل",
                          ][index]
                        : [
                            "There is so much I love in your eyes",
                            "Your smile is my favorite part of the day",
                            "I fall for you a little more every time",
                            "Your beauty is soft and unique, just like you",
                            "You are more beautiful than words can explain",
                            "Your presence makes everything more beautiful",
                          ][index]}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Ending quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <p className="font-serif text-2xl italic leading-relaxed text-[#704357] sm:text-3xl">
            {isArabic
              ? "في كل نسخة منك، كنتِ وستفضلي أجمل بنت في عيني ❤️"
              : "In every version of you, you have always been the most beautiful girl in my eyes. ❤️"}
          </p>
        </motion.div>
      </div>

      {/* Image modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1018]/95 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white"
              aria-label="Close image"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 rounded-full bg-white/10 p-3 text-white sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft size={26} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[78vh] max-w-full rounded-2xl object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 rounded-full bg-white/10 p-3 text-white sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}