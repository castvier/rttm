import React from 'react';
import './sub-gallery/Gallery.css'; // Make sure this path is correct
import GalleryGrid from './sub-gallery/GalleryGrid'; // Adjustments might also be needed in GalleryGrid's CSS for size

const Gallery = () => {
  return (
    <section className="gallery">
      <h1>Screenshot Gallery</h1>
      <GalleryGrid />
    </section>
  );
};

export default Gallery;
