"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();

  return (
    <html lang="en">
      <body>
        <div className="p-6 flex justify-between shadow-md">
          {user && (
            <h1 className="text-2xl">
              {user.firstName?.length ? user?.firstName : "User"}
              {`'s`} Space
            </h1>
          )}
          <SignedOut>
            <SignInButton />
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
