import React from "react";

const ButtonComp = ({ title, disabled, className, width, loading, onClick }) => {
  return (
    <>
      {disabled ? (
        <div
          className={className + ` bg-[#f83758] text-white text-center text-[18px] px-5 py-3 font-bold rounded-[5px] opacity-50 cursor-not-allowed`}
          style={{ width: width }}
        >
          {title}
        </div>
      ) : loading ? (
        <div
          className={`bg-[#750417] text-white text-center text-[18px] px-5 py-3 font-bold rounded-[5px] cursor-not-allowed`}
          style={{ width: width }}
        >
          Loading...
        </div>
      ) : (
        <div
          className={`bg-[#f83758] text-white text-center text-[18px] px-5 py-3 font-bold rounded-[5px] cursor-pointer`}
          style={{ width: width }}
          onClick={onClick}
        >
          {title}
        </div>
      )}
    </>
  );
};

export default ButtonComp;
