import React from "react";

export default function Page() {
  return (
    <main className="w-full">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-2 mb-2 text-white">
          End-User License Agreement (EULA)
        </h1>
        <p className="text-center text-sm text-gray-400 mb-10">
          Last Updated: January 2026
        </p>

        <section className="space-y-6 text-sm leading-relaxed text-gray-200">
          <p>
            This EULA governs your use of the <strong>ROS: Legacy</strong> launcher,
            patcher, and game client. By playing, you agree to these terms.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. License Grant</h2>
          <p>
            We grant you a <strong>non-exclusive, revocable, non-transferable license</strong> to use the launcher
            and connect to our server.
          </p>
          <p>You may not:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Modify, decompile, distribute, or reverse engineer.</li>
            <li>Inject, hook DLLs, or manipulate process memory.</li>
            <li>Bypass launcher security or anti-cheat.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">2. Prohibited Tools</h2>
          <p>Examples of forbidden tools include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cheat Engine or memory editors</li>
            <li>Macros / auto-clickers / botting software</li>
            <li>Virtual machine bypass tools</li>
            <li>Debuggers, packet editors, trainers</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">3. Anti-Cheat Consent</h2>
          <p>By playing, you allow our anti-cheat system to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Scan running processes</li>
            <li>Validate file hashes and integrity</li>
            <li>Detect macros/autoclickers</li>
            <li>Detect virtualization</li>
            <li>Log attempts to modify the client</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">4. Violations</h2>
          <p>Failure to comply may result in:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Account ban</li>
            <li>Disconnect</li>
            <li>Blacklisting</li>
            <li>Removal of access to the launcher</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">5. No Warranty</h2>
          <p>The launcher is provided <strong>“as is”</strong>, including downtime or bugs.</p>

          <h2 className="text-xl font-bold text-white pt-4">6. Termination</h2>
          <p>We may terminate your access at any time for any violation of this agreement.</p>
        </section>
      </div>
    </main>
  );
}

