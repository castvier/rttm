import React from 'react';
import './GalleryGrid.css';

const screenshots = [
  { id: 1, src: '/images/screenshot1.jpg', alt: 'Screenshot 1' },
  { id: 2, src: '/images/screenshot2.jpg', alt: 'Screenshot 2' },
  { id: 3, src: '/images/screenshot3.jpg', alt: 'Screenshot 3' },
  // Add more screenshots as needed
];

const GalleryGrid = () => {
  return (
    <div className="gallery-grid">
      {screenshots.map((screenshot) => (
        <div key={screenshot.id} className="gallery-item">
          <img src={screenshot.src} alt={screenshot.alt} />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;