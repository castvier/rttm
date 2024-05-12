import React, { useState, useEffect } from 'react';
import './GalleryGrid.css';

const screenshots = [
  { id: 1, src: process.env.PUBLIC_URL + '/images/Screenshot1.png', alt: 'Screenshot 1' },
  { id: 2, src: process.env.PUBLIC_URL + '/images/Screenshot2.png', alt: 'Screenshot 2' },
  { id: 3, src: process.env.PUBLIC_URL + '/images/Screenshot3.png', alt: 'Screenshot 3' },
  { id: 4, src: process.env.PUBLIC_URL + '/images/Screenshot4.png', alt: 'Screenshot 4' },
  { id: 5, src: process.env.PUBLIC_URL + '/images/Screenshot5.png', alt: 'Screenshot 5' },
  { id: 6, src: process.env.PUBLIC_URL + '/images/Screenshot6.png', alt: 'Screenshot 6' },
  { id: 7, src: process.env.PUBLIC_URL + '/images/Screenshot7.png', alt: 'Screenshot 7' },
  { id: 8, src: process.env.PUBLIC_URL + '/images/Screenshot8.png', alt: 'Screenshot 8' },
  { id: 9, src: process.env.PUBLIC_URL + '/images/Screenshot9.png', alt: 'Screenshot 9' },
  // Add more screenshots as needed
];

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
        <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
      </div>
    </div>
  );
};


const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery-grid">
        {screenshots.map((screenshot) => (
          <div key={screenshot.id} className="gallery-item">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              onClick={() => handleImageClick(screenshot)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default GalleryGrid;