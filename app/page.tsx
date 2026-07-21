import Image from "next/image";
import PreRegisterForm from "./pre-register-form";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#eaf7ff] text-white">
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-8 sm:px-8 sm:py-10">
        <Image
          src="/bg.png"
          alt="ROS Legacy aerial battle royale battlefield"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(83,190,255,0.16)_0%,rgba(255,255,255,0.04)_42%,rgba(18,104,166,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_58%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <p className="mb-3 max-w-full rounded-sm border border-[#0b4d78]/20 bg-white/62 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#0d5f91] shadow-[0_10px_35px_rgba(27,119,175,0.12)] backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.28em]">
            Coming Soon
          </p>
          <Image
            src="/logo.png"
            alt="ROS Legacy"
            width={980}
            height={490}
            priority
            className="h-auto max-h-[32svh] w-[min(86vw,410px)] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] sm:max-h-none sm:w-[min(78vw,410px)]"
          />

          <div className="mt-2 flex w-full max-w-xl items-center gap-2 sm:mt-1 sm:gap-4">
            <span className="h-px flex-1 bg-[#D88E46]/42" />
            <p className="shrink-0 text-xs font-black uppercase tracking-[0.18em] text-[#D88E46] sm:text-base sm:tracking-[0.32em]">
              Battle Royale Awaits
            </p>
            <span className="h-px flex-1 bg-[#D88E46]/42" />
          </div>


          <p className="mt-4 max-w-[34rem] px-1 text-sm leading-6 sm:max-w-2xl sm:px-0 sm:text-lg sm:leading-8">
            ROS Legacy is preparing for launch. Rally your squad, watch the
            skies, and be first in line when game opens.
          </p>

          <PreRegisterForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
