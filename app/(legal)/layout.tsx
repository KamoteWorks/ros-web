import Link from "next/link";
import Footer from "../footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-[#05070b] text-white">
      <header className="mx-auto flex w-full max-w-4xl px-4 py-6 sm:px-6">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:text-white">
          ← ROS Legacy
        </Link>
      </header>
      <div className="mx-auto w-full max-w-4xl flex-1 break-words px-4 pb-16 pt-8 text-sm leading-relaxed sm:px-6 sm:text-base">
        {children}
      </div>
      <Footer />
    </div>
  );
}
