import React, { useState, useEffect } from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>X</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
