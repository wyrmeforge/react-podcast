import React from 'react';

import Slider from 'react-slick';
import CarouselArrow from './CarouselArrow.jsx';

const Carousel = ({
  children,
  centerMode,
  arrowClassName,
  infinite,
  autoplay,
  centerPadding = 20,
  arrows = false,
  className,
}) => {
  const options = {
    centerMode,
    infinite,
    autoplay,
    centerPadding,
    arrows,
    className,
    prevArrow: <CarouselArrow arrowClassName={arrowClassName} />,
    nextArrow: <CarouselArrow arrowClassName={arrowClassName} isNext />,
    variableWidth: true,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
  };

  return <Slider {...options}>{children}</Slider>;
};

export default Carousel;
