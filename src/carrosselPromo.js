import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from './image/1.png';
import Image2 from './image/2.png';
import Image3 from './image/3.png';

const CarouselComponent = () => {        // aqui se encontras o carrossel com as imagens 
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [
    Image1,
    Image2,
    Image3
  ];

  return (
    <Carousel
      selectedItem={activeIndex}
      onChange={(index) => setActiveIndex(index)}
      autoPlay
      interval={10000}
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

