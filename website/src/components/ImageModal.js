// ImageModal.js
import React, { useEffect } from 'react';

const ImageModal = ({ selectedImage, handleCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCloseModal]);

  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <img src={selectedImage} alt="Enlarged" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;