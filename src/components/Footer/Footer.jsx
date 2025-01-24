import React from "react";
import Logo from "/assets/images/logo.svg"; //logo correctamente

const Footer = () => {
  return (
    <footer className="bg-white flex justify-between items-center h-[70px] px-5 md:px-20 shadow-md z-50">
      <img src={Logo} alt="Ciclorama Logo" className="h-12" />
      <p className="text-sm md:text-base text-right text-[#888888]">
        © 2024 Ciclorama. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
