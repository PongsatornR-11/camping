import React from "react";
import { Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const GithubLink = () => {
  return (
    <Button size={"sm"} variant={'ghost'} asChild>
      <Link href="https://github.com/PongsatornR-11" target="_blank">
        <Github />
      </Link>
    </Button>
  );
};

export default GithubLink;
