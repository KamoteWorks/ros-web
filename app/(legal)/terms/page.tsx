import React from "react";

export default function Page() {
  return (
    <main className="w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-2 mb-2 text-white">
          Terms of Service
        </h1>
        <p className="text-center text-sm text-gray-400 mb-10">
          Last Updated: January 2026
        </p>

        <section className="space-y-6 text-sm leading-relaxed text-gray-200">
          <p>
            Welcome to <strong>ROS: Legacy</strong>. These Terms of Service
            (&quot;Terms&quot;) govern your access to and use of the iDate:
            ReVibe website, launcher, patcher, game servers, and related
            services (&quot;Services&quot;). By accessing or using our Services,
            you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">
            1. About ROS: Legacy
          </h2>
          <p>
            ROS: Legacy is a{" "}
            <strong>fan-made, community-driven revival project</strong> created
            for preservation and enjoyment. “iDate” is a legacy game title
            originally published by GameClub.
          </p>
          <p>
            This project is{" "}
            <strong>
              not affiliated with, endorsed by, or connected to GameClub
            </strong>{" "}
            or any original rights holders. We do not claim ownership of the
            original iDate trademarks, brand names, characters, or assets. All
            trademarks, logos, and content remain the property of their
            respective owners.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">2. Eligibility</h2>
          <p>You may use the Services only if:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>You are at least 13 years old.</li>
            <li>
              You follow all rules stated here and in the Community Guidelines.
            </li>
            <li>You are not banned from the Service.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">
            3. User Accounts
          </h2>
          <p>You agree to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide accurate registration information.</li>
            <li>Keep your account credentials secure.</li>
            <li>Not share or sell your account.</li>
            <li>Not use third-party tools to automate gameplay.</li>
          </ul>
          <p>
            We may suspend or terminate accounts involved in fraud, cheating,
            abuse, or misconduct.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">
            4. Intellectual Property Rights
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Original iDate IP.</strong> All original iDate game
              assets—including but not limited to character models, animations,
              music, maps, UI designs, and related materials—remain the property
              of their respective creators and original publishers.
            </li>
            <li>
              <strong>No Ownership Claim.</strong> ROS: Legacy does{" "}
              <strong>not</strong> claim ownership over any original iDate
              intellectual property.
            </li>
            <li>
              <strong>New Content.</strong> Any new systems, software, website
              code, launcher code, patches, enhancements, or modifications
              created by the ROS: Legacy Team are original works and owned
              solely by the project developers.
            </li>
            <li>
              <strong>User Content.</strong> By submitting content (e.g.,
              feedback, bug reports), you give us permission to use it to
              improve the project.
            </li>
          </ol>

          <h2 className="text-xl font-bold text-white pt-4">
            5. Prohibited Actions
          </h2>
          <p>
            You agree <strong>NOT</strong> to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Modify or reverse-engineer the game client.</li>
            <li>
              Use cheats, macros, automation tools, or unauthorized third-party
              programs.
            </li>
            <li>Harass, threaten, or abuse other players.</li>
            <li>Attempt to access the server by bypassing security systems.</li>
            <li>Exploit bugs or glitches for advantage.</li>
            <li>Use VPNs or virtual machines to evade bans.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">
            6. Server Economy &amp; Virtual Goods
          </h2>
          <p>
            Virtual items, coins, costumes, effects, and rewards have{" "}
            <strong>no cash value</strong> and are generally{" "}
            <strong>non-refundable</strong>.
          </p>
          <p>
            We may modify, remove, rebalance, or adjust virtual items at any
            time for game integrity.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">
            7. Suspension &amp; Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate any account that
            violates these Terms, including: cheating, automation, harassment,
            duping/exploits, chargebacks, false reporting, or real-money trading
            (RMT).
          </p>
          <p>All bans are final unless proven to be in error.</p>

          <h2 className="text-xl font-bold text-white pt-4">8. Disclaimers</h2>
          <p>
            The Service is provided <strong>“as is”</strong> without warranties
            of any kind. We do not guarantee uptime, performance, or
            availability. We may perform maintenance or shutdown at any time.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">
            9. Changes to Terms
          </h2>
          <p>
            We may modify these Terms at any time. Changes take effect when
            posted. Continued use after updates means you accept the revised
            Terms.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">10. Contact</h2>
          <p>For support or legal concerns:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Support:{" "}
              <span className="text-gray-100">support@mythgames.net</span>
            </li>
            <li>
              Legal: <span className="text-gray-100">legal@mythgames.net</span>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">
            Fan Revival &amp; Non-Commercial Notice
          </h2>
          <p>
            ROS: Legacy is intended as a preservation and community enjoyment
            project. We do not claim ownership of original iDate content and
            will comply with valid requests from verified rights holders.
          </p>
        </section>
      </div>
    </main>
  );
}

