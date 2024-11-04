"use client";

import "./globals.css";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
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
          <div className="flex mt-4 pl-2">
            <Sidebar />
            <Content />
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
