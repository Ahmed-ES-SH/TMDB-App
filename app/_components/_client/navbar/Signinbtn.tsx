"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { PiSignIn } from "react-icons/pi";
import Link from "next/link";

export default function Signinbtn() {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "32px",
                height: "32px",
              },
              userButtonPopoverCard: {
                zIndex: "999999",
                marginTop: "15px",
                marginLeft: "auto",
              },
            },
          }}
          afterSwitchSessionUrl="/"
        />
      ) : (
        <Link
          href={"/signin"}
          className="flex items-center gap-2 group"
          aria-label="Go to sign in page"
        >
          <h4 className="group-hover:text-primary_blue max-sm:hidden text-white duration-300 whitespace-nowrap">
            Sign in
          </h4>
          <PiSignIn className="w-6 h-6 text-primary_blue group-hover:text-green-500 duration-300" />
        </Link>
      )}
    </>
  );
}
