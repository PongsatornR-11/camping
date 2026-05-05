"use client";
import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const SignOutLinks = () => {
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={() => toast("Signed out successfully")}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLinks;