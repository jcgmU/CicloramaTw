import React from "react";

const ButtonDark = ({ onClick, children }) => {
  return (
    <button
      className="bg-[#e8e8e8] text-[#212121] 
    font-bold py-3 px-6 rounded-lg 
    transition-all hover:bg-[#1400c6] hover:text-[#e8e8e8]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonDark;
