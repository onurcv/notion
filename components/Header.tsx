"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

const Header = () => {
  const { user } = useUser();

  return (
    <html lang="en">
      <body>
        <div className="pl-2 pr-1 py-6 flex justify-between border-b ml-4">
          {user && (
            <h1 className="text-2xl">
              {user.firstName?.length ? user?.firstName : "User"}
              {` Kullanıcısının`} Çalışma Alanı
            </h1>
          )}
          <SignedOut>
            <div></div>
            <SignInButton>
              <Button>
                <LogIn />
                Giriş Yap
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </body>
    </html>
  );
};

export default Header;
