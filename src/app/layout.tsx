"use client";

import { Roboto } from "next/font/google";
import { TrpcProvider } from "@/server/trpc-provider";
import "@/styles/globals.css";
import Nav from "@/components/Nav";

const roboto = Roboto({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClassNames = [roboto.className].join(" ");

  return (
    <html lang="en" className={fontClassNames}>
      <body>
        <main>
          <TrpcProvider>
            <Nav />
            <div>{children}</div>
          </TrpcProvider>
        </main>
      </body>
    </html>
  );
}
