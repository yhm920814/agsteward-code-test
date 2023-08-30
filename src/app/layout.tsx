"use client";

import { Roboto, Nunito } from "next/font/google";
import { TrpcProvider } from "@/server/trpc-provider";
import "@/styles/globals.css";
import Nav from "@/components/Nav";

const roboto = Roboto({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const nunito = Nunito({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClassNames = [roboto.className, nunito.variable].join(" ");

  return (
    <html lang="en" className={fontClassNames}>
      <body>
        <main>
          <TrpcProvider>
            <Nav />
            <div className="ml-auto mr-auto min-h-[calc(100vh-48px)] w-full bg-[#f2f4f7]">
              {children}
            </div>
          </TrpcProvider>
        </main>
      </body>
    </html>
  );
}
