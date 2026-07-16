import { NextResponse } from "next/server";
import {
  decryptSecurePayload,
  encryptSecurePayload,
  isSecurePayloadEnvelope,
  SECURE_PAYLOAD_HEADER,
  SECURE_PAYLOAD_VERSION,
} from "@/lib/secure-payload";

export const runtime = "nodejs";

type PreRegisterResponse = {
  success?: boolean;
  alreadyRegistered?: boolean;
  message?: string;
  field?: string;
};

function getApiBaseUrl() {
  return (
    process.env.ROS_API_BASE_URL ||
    process.env.MYTH_API_BASE_URL ||
    process.env.NEXT_PUBLIC_ROS_API_BASE_URL ||
    "https://myth-api.mythgames.net"
  ).replace(/\/+$/, "");
}

function getWebPayloadKey() {
  return (
    process.env.NEXT_PUBLIC_ROS_WEB_PAYLOAD_KEY ||
    process.env.ROS_WEB_PAYLOAD_KEY ||
    "ros-web-pre-register-v1"
  );
}

export async function POST(request: Request) {
  try {
    const requestBody = await request.json().catch(() => null);

    if (!isSecurePayloadEnvelope(requestBody)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid encrypted payload.",
        },
        { status: 400 },
      );
    }

    const decryptedBody = decryptSecurePayload(requestBody, getWebPayloadKey()) as {
      email?: unknown;
    } | null;
    const email =
      typeof decryptedBody?.email === "string" ? decryptedBody.email : "";

    if (!email.trim()) {
      return NextResponse.json({
        success: false,
        field: "email",
        message: "Email is required.",
      });
    }

    const apiResponse = await fetch(`${getApiBaseUrl()}/v2/ros/pre-register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        [SECURE_PAYLOAD_HEADER]: SECURE_PAYLOAD_VERSION,
      },
      body: JSON.stringify(
        encryptSecurePayload({
          email,
        }),
      ),
      cache: "no-store",
    });

    const apiBody = await apiResponse.json().catch(() => null);
    let payload = apiBody as PreRegisterResponse | null;

    if (apiResponse.headers.get(SECURE_PAYLOAD_HEADER) === SECURE_PAYLOAD_VERSION) {
      if (!isSecurePayloadEnvelope(apiBody)) {
        throw new Error("Invalid encrypted API response");
      }

      payload = decryptSecurePayload(apiBody) as PreRegisterResponse;
    }

    if (!payload || typeof payload !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to process pre-registration right now.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(payload, {
      status: apiResponse.status,
    });
  } catch (error) {
    console.error("ROS pre-registration proxy failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process pre-registration right now.",
      },
      { status: 500 },
    );
  }
}
