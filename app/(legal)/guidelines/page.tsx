import React from "react";

export default function Page() {
  return (
    <main className="w-full">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-2 mb-2 text-white">
          Community Guidelines
        </h1>

        <section className="space-y-6 text-sm leading-relaxed text-gray-200">
          <p>
            To maintain a safe and fun environment, the following are <strong>not allowed</strong>:
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Toxicity &amp; Harassment</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Insults</li>
            <li>Targeted harassment</li>
            <li>Racism, sexism, or hate speech</li>
            <li>Threats or intimidation</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">2. Cheating or Exploits</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Automation</li>
            <li>Third-party tools</li>
            <li>Bug abuse</li>
            <li>Real-money trading (RMT)</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">3. Impersonation</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Pretending to be staff</li>
            <li>Using similar names to confuse players</li>
            <li>Claiming affiliation with GameClub</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">4. Advertising</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Promoting other servers</li>
            <li>Posting external links without approval</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">5. NSFW or Illegal Content</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Adult content</li>
            <li>Hacking tools</li>
            <li>Malware</li>
            <li>Sale of illegal items</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">Enforcement</h2>
          <p>
            Violations may result in warnings, mutes, kicks, or bans depending on severity and frequency.
          </p>
        </section>
      </div>
    </main>
  );
}

