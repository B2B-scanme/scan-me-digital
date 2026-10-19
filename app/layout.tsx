import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://scanme.services"),
  title: "Scan Me — Digitalisez votre magasin",
  description:
    "A premium QR digital menu and ordering experience for modern hospitality.",
  openGraph: {
    title: "Scan Me — Digitalisez votre magasin",
    description:
      "A premium QR digital menu and ordering experience for modern hospitality.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scan Me — Digitalisez votre magasin",
    description:
      "A premium QR digital menu and ordering experience for modern hospitality.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
