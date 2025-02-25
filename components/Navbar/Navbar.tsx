import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-4  flex-col sm:flex-row sm:items-center gap-2">
        {/* logo */}
        <Logo />
        {/* search */}
        <Search />
        {/* Dark mode & profile */}
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
