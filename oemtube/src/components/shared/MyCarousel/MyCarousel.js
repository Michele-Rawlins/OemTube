import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import brazing from '../../../photos/Brazing-Round-Blur.jpg';
import bender from '../../../photos/bender-kb30.jpg';
import drier from '../../../photos/drier.png';

const items = [
    {
      src: 'https://live.staticflickr.com/65535/50912295961_6ee4934240_z.jpg"  alt="Brazing-Round-Blur',
      altText: 'Slide 1',
      caption: 'Brazing'
    },
    {
      src: 'https://live.staticflickr.com/65535/50912643892_b91d080dfe_z.jpg"  alt="bender-kb30',
      altText: 'Slide 2',
      caption: 'Bender'
    },
    {
      src: 'https://live.staticflickr.com/65535/50912516656_d32001e6c1_z.jpg"  alt="drier',
      altText: 'Slide 3',
      caption: 'Drier'
    }
];

const MyCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className = "carouselItem" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default MyCarousel;