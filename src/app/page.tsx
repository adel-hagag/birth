"use client";

import { useEffect, useRef, useState } from "react";

import Login from "@/components/auth/Login";
import WelcomeScreen from "@/components/sections/WelcomeScreen";
import Hero from "@/components/sections/Hero";
import Beginning from "@/components/sections/Beginning";
import HerSection from "@/components/sections/HerSection";
import OurStory from "@/components/sections/OurStory";
import LoveLetter from "@/components/sections/LoveLetter";
import Countdown from "@/components/sections/Countdown";
import MusicPlayer from "@/components/music/MusicPlayer";
import PhotoGallery from "@/components/sections/PhotoGallery";
import ChatMemories from "@/components/sections/ChatMemories";
import FinalSection from "@/components/sections/FinalSection";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [welcomeOpened, setWelcomeOpened] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleLanguage = () => {
    setLanguage((previous) => (previous === "en" ? "ar" : "en"));
  };

  const handleUnlock = () => {
    setUnlocked(true);
  };

  const handleWelcomeUnlock = () => {
    setWelcomeOpened(true);
  };

useEffect(() => {
  if (!welcomeOpened) return;

  const audio = audioRef.current;
  if (!audio) return;

  audio.src = "/music/ramy_sabry.mp3";
  audio.volume = 0.7;
  audio.currentTime = 0;
  audio.load();

  audio.play().catch(() => {
    console.log("اضغط تشغيل من مشغل الأغاني");
  });
}, [welcomeOpened]);

  if (!unlocked) {
    return <Login onUnlock={handleUnlock} />;
  }

  if (!welcomeOpened) {
    return <WelcomeScreen onUnlock={handleWelcomeUnlock} />;
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-brand-950">
      <div className="noise" />

      <button
        type="button"
        onClick={toggleLanguage}
        aria-label="تغيير اللغة"
        className="fixed right-4 top-4 z-[10000] flex h-12 w-12 items-center justify-center rounded-full border border-pink-300/50 bg-[#120b1c]/95 text-lg font-bold text-pink-100 shadow-[0_8px_30px_rgba(236,72,153,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-pink-300 hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-300/70 sm:right-6 sm:top-6"
      >
        {language === "en" ? "ع" : "EN"}
      </button>

<audio
  ref={audioRef}
  preload="auto"
/>

      <Hero language={language} />
      <Beginning language={language} />
      <HerSection language={language} />
      <OurStory language={language} />
      <LoveLetter />
      <Countdown language={language} />
      <PhotoGallery language={language} />
      <ChatMemories language={language} />
      <FinalSection language={language} />

      <MusicPlayer audioRef={audioRef} />

      <BackToTop />
    </main>
  );
}