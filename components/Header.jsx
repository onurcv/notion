import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="p-6">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Header;
