import React from 'react';
import './GalleryGrid.css';

const screenshots = [
  { id: 1, src: process.env.PUBLIC_URL + '/images/Screenshot1.png', alt: 'Screenshot 1' },
  { id: 2, src: process.env.PUBLIC_URL + '/images/Screenshot2.png', alt: 'Screenshot 2' },
  { id: 3, src: process.env.PUBLIC_URL + '/images/Screenshot3.png', alt: 'Screenshot 3' },
  { id: 4, src: process.env.PUBLIC_URL + '/images/Screenshot4.png', alt: 'Screenshot 4' },
  { id: 5, src: process.env.PUBLIC_URL + '/images/Screenshot5.png', alt: 'Screenshot 5' },
  { id: 6, src: process.env.PUBLIC_URL + '/images/Screenshot6.png', alt: 'Screenshot 6' },
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