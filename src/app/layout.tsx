import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quicksand = localFont({
  src: [
    {
      path: "./fonts/Quicksand-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Quicksand-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Quicksand-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
});

const boogaloo = localFont({
  src: [
    {
      path: "./fonts/Boogaloo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-boogaloo",
});

const openSans = localFont({
  src: [
    {
      path: "./fonts/OpenSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-opensans",
});

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
        className={`${openSans.variable} ${quicksand.variable} ${boogaloo.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
