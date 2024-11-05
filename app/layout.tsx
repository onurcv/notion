"use client";

import "./globals.css";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hydration hatasını önlemek için bir `isClient` durumu ekliyoruz.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Bu sadece istemci tarafında çalışacak.
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Sunucu tarafında boş render eder.

  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Header />
          <div className="flex mt-4 min-h-screen">
            <Sidebar />
            <div className="flex-1 bg-gray-100 overflow-y-auto scrollbar-hide rounded-xl">{children}</div>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
