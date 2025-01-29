import React from "react";

const ContactInfoButton = ({ children, onClick }) => {
  return (
    <button
      className="text-[#e1e1e1] text-lg font-extrabold uppercase relative overflow-hidden transition-all duration-400 hover:text-white group"
      onClick={onClick}
    >
      {children}
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-400 group-hover:w-full group-hover:left-0" />
    </button>
  );
};

export default ContactInfoButton;
