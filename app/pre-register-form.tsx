"use client";

import { FormEvent, useState } from "react";

const launcherPath = "https://dl.mythgames.net/rosl/full";
const securePayloadVersion = "aes-256-gcm-v1";
const webPayloadKey =
  process.env.NEXT_PUBLIC_ROS_WEB_PAYLOAD_KEY || "ros-web-pre-register-v1";

type PreRegisterResponse = {
  success?: boolean;
  alreadyRegistered?: boolean;
  message?: string;
  field?: string;
};

type SecurePayloadEnvelope = {
  v: 1;
  iv: string;
  tag: string;
  payload: string;
};

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

async function getBrowserPayloadKey() {
  const encodedKey = new TextEncoder().encode(webPayloadKey);
  const keyHash = await window.crypto.subtle.digest("SHA-256", encodedKey);

  return window.crypto.subtle.importKey("raw", keyHash, "AES-GCM", false, [
    "encrypt",
  ]);
}

async function encryptBrowserPayload(
  value: unknown,
): Promise<SecurePayloadEnvelope> {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const key = await getBrowserPayloadKey();
  const plaintext = new TextEncoder().encode(JSON.stringify(value ?? null));
  const encryptedBytes = new Uint8Array(
    await window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext),
  );
  const authTagLength = 16;
  const payload = encryptedBytes.slice(
    0,
    encryptedBytes.length - authTagLength,
  );
  const tag = encryptedBytes.slice(encryptedBytes.length - authTagLength);

  return {
    v: 1,
    iv: bytesToBase64(iv),
    tag: bytesToBase64(tag),
    payload: bytesToBase64(payload),
  };
}

export default function PreRegisterForm() {
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(
    "Success! You are pre-registered.",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const emailAddress = email.trim();

    if (!emailAddress || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const encryptedPayload = await encryptBrowserPayload({
        email: emailAddress,
      });

      const request = await fetch("/api/pre-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-ros-web-secure": securePayloadVersion,
        },
        body: JSON.stringify(encryptedPayload),
      });

      let payload: PreRegisterResponse | null = null;

      try {
        payload = (await request.json()) as PreRegisterResponse;
      } catch {
        payload = null;
      }

      if (!request.ok || !payload?.success) {
        setErrorMessage(
          payload?.message ||
            "Unable to pre-register right now. Please try again.",
        );
        return;
      }

      setStatusMessage(
        payload.message ||
          (payload.alreadyRegistered
            ? "You are already pre-registered."
            : "Success! You are pre-registered."),
      );
      setIsRegistered(true);
    } catch {
      setErrorMessage(
        "Unable to reach the pre-registration server. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isRegistered) {
    return (
      <div className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:mt-8">
        <p
          role="status"
          className="text-center text-sm font-bold leading-6 text-[#4CAA43] sm:text-base"
        >
          {statusMessage}
        </p>
        <a
          href={launcherPath}
          download
          className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-sm bg-black px-4 py-3 text-center text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition hover:bg-[#151515] focus:outline-none focus:ring-2 focus:ring-white/70 sm:min-h-14 sm:px-6 sm:text-sm sm:tracking-[0.12em]"
        >
          Download ROS Legacy Installer
        </a>
      </div>
    );
  }

  return (
    <div className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:mt-8">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="pre-register-email" className="sr-only">
          Email address
        </label>
        <input
          id="pre-register-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="min-h-12 w-full min-w-0 flex-1 rounded-sm border-0 bg-white px-4 text-sm font-bold text-[#08111f] outline-none transition placeholder:text-[#6f7887] focus:ring-2 focus:ring-red-500 sm:min-h-14"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-sm bg-black px-5 text-xs font-black uppercase tracking-[0.1em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition hover:bg-[#151515] focus:outline-none focus:ring-2 focus:ring-white/70 disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-14 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.12em]"
        >
          {isSubmitting ? "Submitting..." : "Pre-Register"}
        </button>
      </form>
      {errorMessage ? (
        <p
          role="alert"
          className="rounded-sm bg-black/45 px-3 py-3 text-center text-sm font-bold leading-6 text-red-200 sm:px-4"
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
