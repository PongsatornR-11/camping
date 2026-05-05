import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camping Thailand",
  description: "Discover and share camping locations across Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${nunito.variable} font-nunito antialiased`}
        >
          <Providers>
            <Navbar />
            <main className="container">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}