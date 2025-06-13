import React from "react";

const ContactInfoButton = ({ children, onClick }) => {
  return (
    <button
      className="font-montreal font-normal text-[#21212] text-3xl  relative overflow-hidden transition-all duration-400 hover:text-black group"
      onClick={onClick}
    >
      {children}
      <span className=" absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full group-hover:left-0" />
    </button>
  );
};

export default ContactInfoButton;
