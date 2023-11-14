import React from 'react';
import { tcl } from '../utils/styles.js';

const Button = ({ className, onClick, children, bordered, xl }) => {
  const buttonVariations = tcl({
    'h-[41px] px-6': !xl,
    'h-[65px] px-9 ': xl,
    'hover:drop-shadow-hoverXl': xl && !bordered,
    'border-2 border-black': bordered,
    'bg-black text-white hover:drop-shadow-hover': !bordered,
  });

  const buttonClasses = tcl(
    'rounded-8 flex justify-center items-center hover:cursor-pointer !text-14 transition-all uppercase font-bold',
    buttonVariations,
    className,
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
