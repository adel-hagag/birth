"use client";

import { useState } from "react";
import { Heart, Lock, ArrowRight } from "lucide-react";

type WelcomeScreenProps = {
  onUnlock: () => void;
};

export default function WelcomeScreen({
  onUnlock,
}: WelcomeScreenProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    window.setTimeout(() => {
      onUnlock();
    }, 500);
  };

  return (
    <main className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-[#090511] px-5 py-10 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/20 blur-[120px]" />
        <div className="absolute left-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-purple-600/15 blur-[110px]" />
      </div>

      <section className="relative z-10 w-full max-w-md text-center">
        <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-pink-300/30 bg-pink-500/10 shadow-[0_0_60px_rgba(236,72,153,0.25)]">
          <Heart className="h-11 w-11 fill-pink-400 text-pink-400" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-pink-300/70">
          A little surprise for you
        </p>

        <h1 className="text-4xl font-black leading-tight text-pink-50 sm:text-5xl">
          Welcome, My Love
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-pink-100/65 sm:text-base">
          I made this little place just for you.
          <br />
          Every detail holds a special memory.
        </p>

        <button
          type="button"
          onClick={handleOpen}
          disabled={isOpening}
          className="mx-auto mt-9 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-7 py-4 text-sm font-bold text-white shadow-[0_12px_40px_rgba(236,72,153,0.3)] transition hover:scale-105 hover:shadow-[0_15px_50px_rgba(236,72,153,0.45)] active:scale-95 disabled:cursor-wait disabled:opacity-70"
        >
          {isOpening ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Opening...
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" />
              Open Your Surprise
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="mt-6 text-xs text-pink-200/35">
          Made with love, just for you ❤️
        </p>
      </section>
    </main>
  );
}