import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description:
    "Ecommerce website built with Next.js, Tailwind CSS, TypeScript and Docker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className=" sticky top-0 ">
          <Banner />
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
