import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VeriFact AI",
  description: "An AI-powered tool that detects potential misinformation and educates users on identifying credible, trustworthy content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <body
        className={cn(
          "font-sans antialiased min-h-screen bg-background text-foreground",
          inter.className
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
