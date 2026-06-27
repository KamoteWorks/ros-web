import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#eaf7ff] text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-4 sm:px-8">
        <Image
          src="/bg.png"
          alt="ROS Legacy aerial battle royale battlefield"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(83,190,255,0.16)_0%,rgba(255,255,255,0.04)_42%,rgba(18,104,166,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_58%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <p className="mb-3 rounded-sm border border-[#0b4d78]/20 bg-white/62 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#0d5f91] shadow-[0_10px_35px_rgba(27,119,175,0.12)] backdrop-blur">
            Coming Soon
          </p>
          <Image
            src="/logo.png"
            alt="ROS Legacy"
            width={980}
            height={490}
            priority
            className="h-auto w-[min(78vw,410px)] drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
          />

          <div className="mt-1 flex w-full max-w-xl items-center gap-4">
            <span className="h-px flex-1 bg-[#D88E46]/42" />
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#D88E46] sm:text-base">
              Battle Royale Awaits
            </p>
            <span className="h-px flex-1 bg-[#D88E46]/42" />
          </div>


          <p className="mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            ROS Legacy is preparing for launch. Rally your squad, watch the
            skies, and be first in line when game opens.
          </p>

          <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:flex-row">

            <a
              href="#"
              className="inline-flex h-12 flex-1 items-center justify-center rounded-sm border border-[#0d5f91]/28 bg-white/60 px-7 text-sm font-black uppercase tracking-[0.2em] text-[#062033] shadow-[0_18px_45px_rgba(27,119,175,0.12)] backdrop-blur-sm transition hover:bg-white sm:h-14"
            >
               Pre-Register Soon
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
