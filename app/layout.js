import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Enan Christian | Python Developer & Software Engineer",
  description:
    "Portfolio of Enan Christian — Python Developer specializing in scalable applications, REST APIs, automation, and modern web development with Django, FastAPI, and more.",
  keywords: [
    "Python Developer",
    "Software Engineer",
    "FastAPI",
    "Django",
    "Portfolio",
    "Enan Christian",
  ],
  authors: [{ name: "Enan Christian" }],
  openGraph: {
    title: "Enan Christian | Python Developer",
    description: "Python Developer crafting robust, scalable applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
