"use client";

import "./globals.css";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { trTR } from "@clerk/localizations";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <html lang="en">
      <body>
        <ClerkProvider localization={trTR}>
          <Header />
          <div className="flex mt-6 min-h-screen">
            <Sidebar />
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
