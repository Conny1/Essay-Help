import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsApp from "./components/WhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExamAidHub",
  description:
    "Unlock Academic Success with ExamAidHub Let our professional tutors handle your online classes, coursework, exams, quizzes, and assignments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}
