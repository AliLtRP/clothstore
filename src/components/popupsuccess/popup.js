import React, { useRef, useEffect } from 'react';
import successIcon from '../../assets/success.svg'; 
import './popupstyle.css';

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
    <>
      {open && <div className="overlay" onClick={onClose}></div>}
      <dialog ref={dialogRef} className="popup-dialog">
        <div className="popup-content">
          <img src={successIcon} alt="Success" className="success-icon" />
          <p>{message}</p>
        </div>
      </dialog>
    </>
  );
};

export default Popup;



