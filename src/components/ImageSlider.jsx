// import React, { useState, useEffect } from 'react';

// function ImageSlider({ images, interval }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(intervalId);
//   }, [images, interval]);

//   return <img src={images[currentImageIndex]} alt="Slideshow" />;
// }


