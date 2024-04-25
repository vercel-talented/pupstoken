import React from 'react';
import './ImageAnimation.css'; // Import CSS file with animation styles

const ImageAnimation = () => {
  return (
    <div className="image-container">
      <img src="image.jpg" alt="Description" className="animated-image" />
    </div>
  );
};

export default ImageAnimation;