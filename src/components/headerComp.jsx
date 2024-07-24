import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import backicon from '../assets/back.svg';

const Header = ({ title, icon, path }) => {
  const navigate = useNavigate(); 

  return (
    <>
      <div>
          <div className="w-full h-20 flex justify-between items-center px-4">
          <div onClick={() => navigate(-1)} className=' hover:cursor-pointer'>
            <img src={backicon} className="h-5 w-[9.5px]" />
          </div>
          <p className='text-black font-semibold text-lg leading-4'>{title}</p>
          <div
            className="h-5 w-[9.5px]"
            onClick={() => navigate(path)}
          >
            {icon}
          </div>
        </div>
        <div className="w-full border-[0.6px] bg-[#C6C6C6] mt-[-10px]" />
        </div>
    </>
  );
};

export default Header;
