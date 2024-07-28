import React from 'react';
import ErrorSvg from "./ErrorSvg";
import { useNavigate } from 'react-router-dom';

const Error = () => {
  setTimeout(() => {
    window.location.href = "/home";
  }, 2000);

  return (
    <div className='w-full min-h-screen h-full flex flex-col justify-center items-center gap-8'>
      <ErrorSvg />
      <h1 className=' text-lg font-medium'>Ops somthing happend</h1>
    </div>
  )
}

export default Error