import React from "react";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button size={"icon"} asChild>
      <h1 className="text-2xl">logo</h1>
    </Button>
  );
};

export default Logo;
