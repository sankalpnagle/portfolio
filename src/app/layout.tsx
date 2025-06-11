import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark:bg-gray-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f9fcff] dark:bg-gray-950 antialiased transition-colors duration-200`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
