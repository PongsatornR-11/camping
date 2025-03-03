import React from "react";

// import lucide icons
import { AlignJustify } from "lucide-react";

// import dropdown-menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import button
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";

// import links from utils
import { links } from "@/utils/links";

// import signoutlinks
import SignOutLinks from "./SignOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdownListMenu = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <AlignJustify />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <SignedOut>
          <DropdownMenuLabel>Not Signed In</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <SignInButton mode="modal">Sign In</SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <SignUpButton mode="modal">Sign Up</SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {links.map((link, index) => {
            return (
              <DropdownMenuItem key={index} className="cursor-pointer" asChild>
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLinks />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
