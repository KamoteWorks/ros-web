import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROS Legacy | Coming Soon",
  description:
    "ROS Legacy is coming soon. Pre-register for a bright, skyborne battle royale launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
