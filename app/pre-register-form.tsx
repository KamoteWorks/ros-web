"use client";

import { FormEvent, useState } from "react";

const launcherPath = "/myth-games-launcher.exe";

export default function PreRegisterForm() {
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setIsRegistered(true);
  }

  if (isRegistered) {
    return (
      <div className="mt-8 flex w-full max-w-xl flex-col gap-3">
        <p
          role="status"
          className="text-center text-sm font-bold leading-6 text-[#4CAA43] sm:text-base"
        >
          Success! You are pre-registered.
        </p>
        <a
          href={launcherPath}
          download
          className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[#0984e3] px-6 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0875c9] sm:min-h-14"
        >
          Download MythGames Launcher
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="pre-register-email" className="sr-only">
        Email address
      </label>
      <input
        id="pre-register-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="min-h-12 flex-1 rounded-sm border-0 bg-white px-4 text-sm font-bold text-[#08111f] outline-none transition placeholder:text-[#6f7887] focus:ring-2 focus:ring-red-500 sm:min-h-14"
      />
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-sm bg-red-600 px-7 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-red-500 sm:min-h-14"
      >
        Pre-Register
      </button>
    </form>
  );
}
