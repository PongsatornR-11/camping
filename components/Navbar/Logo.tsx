import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { House } from "lucide-react";

const Logo = () => {
  return (
    <Button size="sm" asChild>
      <Link href="/" aria-label="Home" className="text-2xl">
        <House />
      </Link>
    </Button>
  );
};

export default Logo;