import React from "react";

export default function Page() {
  return (
    <main className="w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-2 mb-2 text-white">
          DMCA &amp; Copyright Takedown
        </h1>

        <section className="space-y-6 text-sm leading-relaxed text-gray-200">
          <p>
            If you are a copyright or trademark owner (or a representative of
            one) and believe that ROS: Legacy is using protected content in a
            way that violates your rights, please contact us and we will
            promptly address your concerns.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">
            Submit Takedown Requests To
          </h2>
          <p>
            Email: <span className="text-gray-100">legal@mythgames.net</span>
          </p>

          <h2 className="text-xl font-bold text-white pt-4">
            Include the Following
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Your full legal name and company (if applicable).</li>
            <li>Proof you are the rights holder or an authorized agent.</li>
            <li>Identification of the copyrighted material in question.</li>
            <li>
              A clear description of where the material is located (link or
              screenshot).
            </li>
            <li>
              A statement that you believe in good faith that use is not
              authorized.
            </li>
            <li>
              A statement, under penalty of perjury, that the information is
              accurate and that you are authorized to act on behalf of the
              rights holder.
            </li>
            <li>Your electronic signature.</li>
          </ol>

          <p className="pt-2">
            We will respond within <strong>48–72 hours</strong> in most cases.
          </p>
        </section>
      </div>
    </main>
  );
}

