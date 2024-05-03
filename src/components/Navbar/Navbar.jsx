import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar">
      <p className="logo"> Emira's Coffee</p>
      <ul className="navlinks">
        <li>Home</li>
        <li>Coffee</li>
        <li>Bakery</li>
        <li>Shop</li>
        <li>About</li>
        <li>Login</li>
        <li>Sign up</li>
      </ul>
      <p className="search-icon">
        <BsSearch />
      </p>
    </div>
  );
}

export default Navbar;
