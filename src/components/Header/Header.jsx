// src/components/Header/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-white flex justify-between items-center p-5 md:px-20 md:py-2 shadow-md z-50">
      <Link to="/">
        <img src={Logo} alt="Ciclorama Logo" className="h-12" />
      </Link>
      <nav className="flex gap-8 md:gap-4">
        <Link
          to="/"
          className={`relative text-base cursor-pointer ${
            location.pathname === "/" ? "text-primary" : "text-black"
          }`}
        >
          Home
          <span
            className={`absolute bottom-[-5px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 ${
              location.pathname === "/" ? "w-full" : ""
            }`}
          />
        </Link>
        <Link
          to="/work"
          className={`relative text-base cursor-pointer ${
            location.pathname === "/work" ? "text-primary" : "text-black"
          }`}
        >
          Work
          <span
            className={`absolute bottom-[-5px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 ${
              location.pathname === "/work" ? "w-full" : ""
            }`}
          />
        </Link>
        <Link
          to="/about"
          className={`relative text-base cursor-pointer ${
            location.pathname === "/about" ? "text-primary" : "text-black"
          }`}
        >
          About
          <span
            className={`absolute bottom-[-5px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 ${
              location.pathname === "/about" ? "w-full" : ""
            }`}
          />
        </Link>
        <Link
          to="/contact"
          className={`relative text-base cursor-pointer ${
            location.pathname === "/contact" ? "text-primary" : "text-black"
          }`}
        >
          Contact
          <span
            className={`absolute bottom-[-5px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 ${
              location.pathname === "/contact" ? "w-full" : ""
            }`}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
