"use client";
import React from "react";
import { OAuthStrategy } from "@clerk/types";
import { useSignIn } from "@clerk/nextjs";
import { toast } from "sonner";
import { FaFacebookF, FaXTwitter, FaGoogle } from "react-icons/fa6";
export default function OtherMethods() {
  const { signIn } = useSignIn();

  const handleClickTwitter = () => {
    toast.warning("This Will be Available Soon .");
  };

  if (!signIn) return null;

  const signInWith = (strategy: OAuthStrategy) => {
    return (
      signIn
        .authenticateWithRedirect({
          strategy,
          redirectUrl: `/`,
          redirectUrlComplete: "/",
        })
        .then((res) => {
          console.log(res);
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((err: any) => {
          console.log(err.errors);
          console.error(err, null, 2);
        })
    );
  };

  const socialButtons = [
    {
      name: "Facebook",
      onClick: () => signInWith("oauth_facebook"),
      bgColor: "bg-blue-600",
      icon: <FaFacebookF />,
    },
    {
      name: "Twitter",
      onClick: handleClickTwitter,
      bgColor: "bg-black",
      icon: <FaXTwitter />,
    },
    {
      name: "Google",
      onClick: () => signInWith("oauth_google"),
      bgColor: "bg-red-600",
      icon: <FaGoogle />,
    },
  ];
  return (
    <>
      <div className="flex justify-center gap-4 text-white">
        {socialButtons.map(({ name, onClick, bgColor, icon }) => (
          <button
            key={name}
            onClick={onClick}
            className={`${bgColor} hover:bg-white hover:text-black transition duration-300 p-3 rounded-full`}
            aria-label={`Sign in with ${name}`}
          >
            {icon}
          </button>
        ))}
      </div>
    </>
  );
}
