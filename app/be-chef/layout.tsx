import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Be Chef Restaurant | Kenitra",
  description:
    "Retrouvez Be Chef sur Instagram, WhatsApp et Google Maps.",
  openGraph: {
    title: "Be Chef Restaurant",
    description: "Une cuisine généreuse, préparée avec passion.",
    images: [{ url: "/client-bechef.png", width: 1536, height: 1024 }],
  },
};

export default function BeChefLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
