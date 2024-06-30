import React, { useRef, useEffect } from 'react';
import successIcon from '../../assets/success.svg'; 
import popupStyle from './popupstyle.module.css';

const Popup = ({ message, open, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      dialogRef.current.close();
    }
  }, [open, onClose]);

  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="min-w-[384px] max-w-[480px] p-4 flex flex-col gap-6">
      {open && <div className={popupStyle.overlay} onClick={onClose}></div>}
      <dialog ref={dialogRef} className={popupStyle['popup-dialog']}>
        <div className={popupStyle['popup-content']}>
          <img src={successIcon} alt="Success" className={popupStyle['success-icon']} />
          <p>{message}</p>
        </div>
      </dialog>
    </div>
    </div>
    
  );
};

export default Popup;
