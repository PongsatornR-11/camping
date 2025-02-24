import React from "react";
import Logo from "./Logo";
import Search from "./Search";
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
          <h1>Darkmode</h1>
          <h1>profile</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
