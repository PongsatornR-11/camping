"use client";
import React from "react";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const SignOutLinks = () => {
  const handleSignOut = async () => {
    toast("Sign out successfully");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleSignOut}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLinks;
