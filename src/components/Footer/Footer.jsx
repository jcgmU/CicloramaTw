import React from "react";
import Logo from "../../assets/images/logo.svg"; //logo correctamente

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-[#888888] py-2 w-full">
      <div className="max-w-[1500px] w-full mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src={Logo} alt="Ciclorama Logo" className="w-[100px]" />

        {/* Contenedor adicional para centrar el texto */}
        <p className="text-sm md:text-base text-right">
          © 2024 Ciclorama. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
