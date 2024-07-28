import React from "react";

const styles = {
  disable: " bg-[#f83758] text-white text-center text-[18px] px-5 py-3 font-bold rounded-[5px] opacity-50 cursor-not-allowed",
  loading: " bg-[#750417] text-white text-center text-[18px] px-5 py-3 font-bold rounded-[5px] cursor-not-allowed",
  small: " bg-[#f83758] text-white text-center text-[14px] px-5 py-3 font-bold rounded-[5px] cursor-pointer",
  big: " bg-[#f83758] text-white text-center text-[20px] px-5 py-3 font-bold rounded-[5px] cursor-pointer",
  default: " bg-[#f83758] text-white text-center text-[18px] px-5 py-3 font-bold rounded-[5px] cursor-pointer"
}

const getClassNames = ({ disabled, loading, small, big }) => {
  if (disabled) return styles.disable;
  if (loading) return styles.loading;
  if (small) return styles.small;
  if (big) return styles.big;
  return styles.default;
};

const ButtonComp = ({ title, disabled, className, width, loading, onClick, small, big }) => {
  const buttonStyle = getClassNames({ disabled, loading, small, big });

  return (
    <>
      <button className={`${className} ${buttonStyle}`} style={{ width }} onClick={onClick}>{loading ? "Loading..." : "Log In"}</button>
    </>
  );
};

export default ButtonComp;
