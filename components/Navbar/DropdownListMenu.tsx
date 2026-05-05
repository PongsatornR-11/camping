import React from "react";
import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
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
          {links.map((link) => (
            <DropdownMenuItem key={link.href} className="cursor-pointer" asChild>
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          ))}
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