import React from "react";

export default function Page() {
  return (
    <main className="w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-2 mb-2 text-white">
          Privacy Policy
        </h1>
        <p className="text-center text-sm text-gray-400 mb-10">
          Last Updated: January 2026
        </p>

        <section className="space-y-6 text-sm leading-relaxed text-gray-200">
          <p>
            This Privacy Policy explains how <strong>ROS: Legacy</strong>{" "}
            collects, uses, and protects player data.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">
            1. Information We Collect
          </h2>

          <h3 className="text-base font-semibold text-white pt-2">
            Account Information
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Username</li>
            <li>Email address (optional depending on your system)</li>
            <li>IP address</li>
            <li>Device information for security</li>
          </ul>

          <h3 className="text-base font-semibold text-white pt-2">
            Gameplay Data
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Character names</li>
            <li>Progress, scores, achievements</li>
            <li>Anti-cheat logs</li>
            <li>Login timestamps</li>
            <li>Behavioral data used to detect abuse</li>
          </ul>

          <h3 className="text-base font-semibold text-white pt-2">
            Technical Information
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Browser/device type</li>
            <li>Crash logs</li>
            <li>Launcher statistics</li>
            <li>Patch/installation data</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">
            2. How We Use Your Data
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Operate and maintain servers</li>
            <li>Detect cheating, bots, or malicious activity</li>
            <li>Improve performance and gameplay</li>
            <li>Provide support</li>
            <li>Investigate reports and violations</li>
            <li>Prevent fraud and duplicated accounts</li>
          </ul>
          <p>
            We <strong>do not sell</strong> any personal data.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">3. Data Sharing</h2>
          <p>We may share minimal data with:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Moderators (account IDs, infractions)</li>
            <li>Security tools (anti-cheat systems)</li>
            <li>Hosting providers (server/infra logs)</li>
          </ul>
          <p>
            We do not share data with advertisers or unrelated third parties.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">
            4. Data Retention
          </h2>
          <p>
            We retain account and gameplay data as long as your account remains
            active. Suspended accounts may be stored for anti-abuse reasons.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">5. Security</h2>
          <p>
            We use firewalls, encryption, anti-cheat detection, and internal
            auditing to protect your data. However, no online system is 100%
            secure.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">6. Your Rights</h2>
          <p>You may request:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Account deletion</li>
            <li>Data export</li>
            <li>Correction of incorrect information</li>
          </ul>
          <p>
            Requests can be sent to{" "}
            <span className="text-gray-100">support@mythgames.net</span>.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">7. Updates</h2>
          <p>
            We may update this policy as needed. Updates are effective upon
            posting.
          </p>
        </section>
      </div>
    </main>
  );
}

