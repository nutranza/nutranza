import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { quicksand, boogaloo, openSans, helveticaNeueCyr, rocaOne } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Nutranza",
  description: "Nutranza - Food & Nutrition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${quicksand.variable} ${boogaloo.variable} ${helveticaNeueCyr.variable} ${rocaOne.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
