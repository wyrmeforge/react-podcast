import React from 'react';
import { ArrowIcon } from '../Icons/index.js';
import { tcl } from '../../utils/styles.js';

const CarouselArrow = ({ isNext, onClick, arrowClassName }) => {
  const arrowClasses = tcl(
    'absolute bottom-0 group transition-all',
    {
      'right-[5%] md:right-0 md:left-[210px]': isNext,
      'rotate-180 ': !isNext,
    },
    arrowClassName,
  );

  return (
    <button tabIndex={0} onClick={onClick} className={arrowClasses}>
      <ArrowIcon className='group-hover:[&_path]:stroke-vermillion' />
    </button>
  );
};

export default CarouselArrow;
