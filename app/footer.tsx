import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  ["/privacy", "PRIVACY NOTICE"],
  ["/terms", "TERMS OF SERVICE"],
  ["/topup-terms", "TOP-UP TERMS"],
] as const;

const secondaryLinks = [
  ["/eula", "EULA"],
  ["/security", "ANTI-CHEAT"],
  ["/guidelines", "GUIDELINES"],
  ["/dmca", "DMCA"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="text-center">
          <div className="mb-5">
            <div className="flex items-center justify-center gap-4">
              <Image src="/mythlogo.svg" alt="Myth Games" width={120} height={48} className="h-auto w-30" />
              <Image src="/roslogo.svg" alt="Special Force" width={80} height={48} className="h-auto w-20" />
            </div>

            <div className="mt-4 text-sm text-gray-500">
              © 2023–{new Date().getFullYear()} Myth Games, Inc., ROS: Legacy.
            </div>

            <div className="mx-auto mt-2 max-w-3xl px-2 text-[10px] leading-relaxed text-gray-500">
              ROS: Legacy is a fan-made revival project and is not affiliated
              with or endorsed by GameClub or any original rights holders. All
              original trademarks and game content belong to their respective
              owners.
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3 sm:mt-0">
            {primaryLinks.map(([href, label]) => (
              <Link key={href} href={href} className="cursor-pointer rounded-md bg-transparent px-4 py-2 text-[7.5pt] font-bold text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100">
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {secondaryLinks.map(([href, label]) => (
              <Link key={href} href={href} className="text-[8pt] text-gray-600 underline hover:text-gray-900">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
