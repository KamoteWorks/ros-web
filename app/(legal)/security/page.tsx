import React from "react";

export default function Page() {
  return (
    <main className="w-full">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-2 mb-2 text-white">
          Anti-Cheat Policy
        </h1>

        <section className="space-y-6 text-sm leading-relaxed text-gray-200">
          <p>
            ROS: Legacy uses a custom anti-cheat system to maintain fair gameplay.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">Strictly Prohibited</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Macros</li>
            <li>Autoclickers</li>
            <li>Bots</li>
            <li>Cheat Engine</li>
            <li>Memory scanners</li>
            <li>VM-based evasion</li>
            <li>Remote process injection</li>
            <li>DLL modification</li>
            <li>File tampering</li>
            <li>Packet edits</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">Immediate Punishment</h2>
          <p>Depending on severity, violations may result in:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Auto-disconnect</li>
            <li>Permanent ban</li>
            <li>Invalidation of rankings</li>
            <li>Clan penalties (if applicable)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

