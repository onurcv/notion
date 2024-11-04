"use client";

import "./globals.css";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Header />
        </ClerkProvider>
        <div className="flex gap-6 pl-6 pt-4">
          <Sidebar />
          <Content />
          {children}
        </div>
      </body>
    </html>
  );
}
