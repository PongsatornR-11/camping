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


const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((link, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
