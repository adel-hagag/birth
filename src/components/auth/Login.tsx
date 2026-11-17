"use client";

import { useState, type FormEvent } from "react";
import {
  Heart,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
} from "lucide-react";

interface LoginProps {
  onUnlock: () => void;
}

export default function Login({ onUnlock }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const CORRECT_EMAIL = "adelASH1010166@gmail.com";
  const CORRECT_PASSWORD = "2322023";

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log("Entered Email:", email.trim().toLowerCase());
  console.log("Expected Email:", CORRECT_EMAIL.toLowerCase());
  console.log("Password Match:", password === CORRECT_PASSWORD);

  if (
    email.trim().toLowerCase() === CORRECT_EMAIL.toLowerCase() &&
    password === CORRECT_PASSWORD
  ) {
    setError("");
    onUnlock();
  } else {
    setError("الإيميل أو كلمة السر غلط ❤️");
  }
};

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#fffaf7] text-slate-900">
      <div className="relative flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 sm:py-10">
        {/* Background decorations */}
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-rose-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[350px] w-[350px] rounded-full bg-pink-200/40 blur-[100px]" />

        {/* Login card */}
        <section className="relative w-full max-w-md">
          <div className="rounded-[28px] border border-rose-100 bg-white/85 p-6 shadow-[0_20px_70px_rgba(190,24,93,0.09)] backdrop-blur-2xl sm:p-9">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-rose-200 bg-rose-50 shadow-sm">
                <Heart
                  size={28}
                  className="fill-rose-400 text-rose-400"
                />
              </div>
            </div>

            {/* Heading */}
            <div className="mb-8 text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-500">
                Welcome back
              </p>

              <h1 className="font-serif text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Our Little Story
              </h1>

              <p className="mx-auto mt-3 max-w-[280px] text-sm leading-6 text-slate-500">
                Sign in to continue to your special place.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500"
                >
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400"
                  />

                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-13 w-full rounded-2xl border border-rose-100 bg-rose-50/40 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:bg-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-13 w-full rounded-2xl border border-rose-100 bg-rose-50/40 pl-11 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:bg-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-rose-500"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-500"
                >
                  {error}
                </div>
              )}

              {/* Login button */}
              <button
                type="submit"
                className="group mt-3 flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-rose-500 px-5 text-sm font-medium text-white shadow-lg shadow-rose-200 transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600 hover:shadow-xl active:translate-y-0"
              >
                <span>Enter our story</span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Bottom */}
            <div className="mt-8 border-t border-rose-100 pt-6 text-center">
              <p className="text-xs leading-5 text-slate-400">
                Made with{" "}
                <Heart
                  size={12}
                  className="mx-1 inline fill-rose-400 text-rose-400"
                />{" "}
                for someone special
              </p>
            </div>
          </div>

          {/* Small decoration */}
          <div className="mt-5 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-rose-300">
              A place made for two
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}