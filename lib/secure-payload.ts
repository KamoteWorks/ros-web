import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from "node:crypto";

export const SECURE_PAYLOAD_HEADER = "x-myth-secure-api";
export const SECURE_PAYLOAD_VERSION = "aes-256-gcm-v1";

export type SecurePayloadEnvelope = {
  v: 1;
  iv: string;
  tag: string;
  payload: string;
};

export function isSecurePayloadEnvelope(
  value: unknown,
): value is SecurePayloadEnvelope {
  const body = value as Partial<SecurePayloadEnvelope>;

  return (
    !!body &&
    body.v === 1 &&
    typeof body.iv === "string" &&
    typeof body.tag === "string" &&
    typeof body.payload === "string"
  );
}

function createPayloadKey(secret: string) {
  return createHash("sha256").update(String(secret)).digest();
}

function getSecurePayloadKey(secret?: string) {
  const configuredSecret =
    secret ||
    process.env.SECURE_API_KEY ||
    process.env.SECURE_PAYLOAD_KEY ||
    process.env.SECRET;

  if (!configuredSecret) {
    throw new Error(
      "SECURE_API_KEY, SECURE_PAYLOAD_KEY, or SECRET must be configured",
    );
  }

  return createPayloadKey(configuredSecret);
}

export function encryptSecurePayload(
  value: unknown,
  secret?: string,
): SecurePayloadEnvelope {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", getSecurePayloadKey(secret), iv);
  const plaintext = Buffer.from(JSON.stringify(value ?? null), "utf8");
  const encrypted = Buffer.concat([cipher.update(plaintext), cipher.final()]);

  return {
    v: 1,
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64"),
    payload: encrypted.toString("base64"),
  };
}

export function decryptSecurePayload(envelope: unknown, secret?: string) {
  if (!isSecurePayloadEnvelope(envelope)) {
    throw new Error("Invalid secure payload envelope");
  }

  const decipher = createDecipheriv(
    "aes-256-gcm",
    getSecurePayloadKey(secret),
    Buffer.from(envelope.iv, "base64"),
  );

  decipher.setAuthTag(Buffer.from(envelope.tag, "base64"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(envelope.payload, "base64")),
    decipher.final(),
  ]);

  return JSON.parse(decrypted.toString("utf8"));
}
