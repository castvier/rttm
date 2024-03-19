import React from 'react';
import './sub-gallery/Gallery.css';
import GalleryGrid from './sub-gallery/GalleryGrid';

const Gallery = () => {
  return (
    <section className="gallery">
      <h1>Screenshot Gallery</h1>
      <GalleryGrid />
    </section>
  );
};

export default Gallery;