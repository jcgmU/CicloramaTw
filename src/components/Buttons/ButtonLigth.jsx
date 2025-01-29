import React from "react";

const ButtonLigth = ({ children, onClick }) => {
  return (
    <button
      className="bg-[#212121] text-[#e8e8e8] font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#1400c6] hover:text-[#e8e8e8]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonLigth;
