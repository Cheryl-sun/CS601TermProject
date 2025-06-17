import React, { useState } from 'react';
import './styles.css';

const images = [
  '/pic1.jpeg',
  '/pic2.jpeg',
  '/pic3.jpeg',
  '/pic4.jpeg',
  '/pic5.jpeg',
  '/pic6.jpeg'
];

const Album = () => {
  const [startIndex, setStartIndex] = useState(0);

  const showPrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const showNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 4 >= images.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="album-container">
      <button className="arrow left" onClick={showPrevious}>&#10094;</button>

      <div className="album-grid">
        {images.slice(startIndex, startIndex + 4).map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="album-image" />
        ))}
      </div>

      <button className="arrow right" onClick={showNext}>&#10095;</button>
    </div>
  );
};

export default Album;
