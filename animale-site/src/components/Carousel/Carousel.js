import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const images = [
  "https://placehold.co/600x400?text=Hello+World",
  "https://placehold.co/600x400/orange/white",
  "https://placehold.co/600x400?text=Hello+World",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[current]} alt={`Slide ${current + 1}`} />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
