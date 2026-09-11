"use client";

import { useEffect, useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  Music2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";

type MusicPlayerProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
};

const songs = [
  {
    title: "Ramy Sabry",
    artist: "Love Playlist",
    src: "/music/ramy_sabry.mp3",
  },
  {
    title: "Mahmoud El Esseily",
    artist: "Our Special Song",
    src: "/music/Mahmoud El Esseily.mp3",
  },
  {
    title: "TUL8TE",
    artist: "For Us",
    src: "/music/our-song.mp3",
  },
];

export default function MusicPlayer({ audioRef }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [volume, setVolume] = useState(70);
  const [currentSong, setCurrentSong] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const selectedSong = songs[currentSong];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audioRef]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      const nextIndex = (currentSong + 1) % songs.length;
      const nextSong = songs[nextIndex];

      setCurrentSong(nextIndex);

      audio.src = nextSong.src;
      audio.currentTime = 0;
      audio.volume = isMuted ? 0 : volume / 100;
      audio.load();

      audio.play().catch(() => {
        setIsPlaying(false);
      });
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef, currentSong, isMuted, volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  const changeVolume = (value: number) => {
    const audio = audioRef.current;
    const nextVolume = Math.max(0, Math.min(100, value));

    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);

    if (audio) {
      audio.volume = nextVolume / 100;
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      const restoredVolume = volume === 0 ? 70 : volume;

      audio.volume = restoredVolume / 100;
      setVolume(restoredVolume);
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const changeSong = (direction: "next" | "prev") => {
    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = !audio.paused;

    const nextIndex =
      direction === "next"
        ? (currentSong + 1) % songs.length
        : (currentSong - 1 + songs.length) % songs.length;

    const nextSong = songs[nextIndex];

    setCurrentSong(nextIndex);

    audio.pause();
    audio.src = nextSong.src;
    audio.currentTime = 0;
    audio.volume = isMuted ? 0 : volume / 100;
    audio.load();

    if (wasPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const selectSong = async (index: number) => {
    const audio = audioRef.current;
    if (!audio || index === currentSong) return;

    const wasPlaying = !audio.paused;
    const nextSong = songs[index];

    setCurrentSong(index);

    audio.pause();
    audio.src = nextSong.src;
    audio.currentTime = 0;
    audio.volume = isMuted ? 0 : volume / 100;
    audio.load();

    if (wasPlaying) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-[9998] mx-auto w-auto max-w-md sm:bottom-6 sm:left-auto sm:right-6">
        <div className="overflow-hidden rounded-3xl border border-pink-300/20 bg-[#120b1c]/95 shadow-[0_15px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-center gap-3 p-3 sm:p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg">
              <Music2 size={23} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-pink-100">
                {selectedSong.title}
              </p>

              <p className="truncate text-xs text-pink-200/60">
                {selectedSong.artist}
              </p>
            </div>

            <button
              type="button"
              onClick={() => changeSong("prev")}
              aria-label="الأغنية السابقة"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-pink-200 transition hover:bg-pink-500/20 hover:text-white sm:flex"
            >
              <SkipBack size={17} />
            </button>

            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transition hover:scale-105"
            >
              {isPlaying ? <Pause size={19} /> : <Play size={19} />}
            </button>

            <button
              type="button"
              onClick={() => changeSong("next")}
              aria-label="الأغنية التالية"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-pink-200 transition hover:bg-pink-500/20 hover:text-white sm:flex"
            >
              <SkipForward size={17} />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label="فتح إعدادات الموسيقى"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-pink-200 transition hover:bg-pink-500/20 hover:text-white"
            >
              {isOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-pink-300/10 px-4 pb-4 pt-3">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold text-pink-100">
                  Playlist
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "إلغاء كتم الصوت" : "كتم الصوت"}
                    className="text-pink-200 transition hover:text-white"
                  >
                    {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(event) =>
                      changeVolume(Number(event.target.value))
                    }
                    aria-label="مستوى الصوت"
                    className="w-24 accent-pink-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                {songs.map((song, index) => {
                  const isSelected = index === currentSong;

                  return (
                    <button
                      key={song.src}
                      type="button"
                      onClick={() => selectSong(index)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${
                        isSelected
                          ? "bg-pink-500/20 text-pink-100"
                          : "text-pink-200/70 hover:bg-white/5 hover:text-pink-100"
                      }`}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-xs">
                        {index + 1}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold">
                          {song.title}
                        </span>

                        <span className="block truncate text-xs opacity-60">
                          {song.artist}
                        </span>
                      </span>

                      {isSelected && (
                        <span className="text-xs text-pink-300">
                          {isPlaying ? "Playing" : "Selected"}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}