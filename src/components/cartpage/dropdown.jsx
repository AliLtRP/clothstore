import React, { useState } from 'react';

const CustomDropdown = ({ options, selectedOption, onOptionSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mb-2 bg-white h-[48px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" border border-[#ccc] text-gray-900 text-md text rounded-[10px] focus:border-[#f83758] w-full p-3 flex justify-between items-center font-bold"
      >
        <span className={selectedOption ? 'text-black' : 'text-[#9ba3af]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="block w-full text-left px-4 py-2 text-md text-gray-900 font-bold"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
