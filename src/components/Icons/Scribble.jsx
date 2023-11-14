import React from 'react';
import Icon from '../Icon.jsx';

const Scribble = ({ stroke = '#000' }) => {
  const iconClasses = `absolute bottom-[-77px] z-20 left-[calc(50%-75px)]`;

  return (
    <Icon width='150' height='154' className={iconClasses}>
      <path
        d='M54 2C54.0002 120.75 82.6905 85.7939 86.822 77.8929C122.305 10.0357 42.4671 47.5357 56.6612 152'
        stroke={stroke}
        strokeWidth='2.5'
        strokeLinecap='round'
      />
    </Icon>
  );
};

export default Scribble;
