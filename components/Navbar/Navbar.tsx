import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import GithubLink from "./GithubLink";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav aria-label="Main navigation">
      <div className="container flex justify-between py-4 flex-col sm:flex-row sm:items-center gap-2">
        <div className="flex items-center space-x-2">
          <Logo />
          <GithubLink />
        </div>
        <Suspense>
          <Search />
        </Suspense>
        <div className="flex space-x-2">
          <DarkMode />
          <DropdownListMenu />
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;