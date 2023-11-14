import React from 'react';
import { tcl } from '../utils/styles.js';

const Button = ({ className, onClick, children, bordered, type = 'button', xl }) => {
  const buttonVariations = tcl({
    'py-3 px-6 max-h-[41px]': !xl,
    'py-5 px-9 max-h-[62px]': xl,
    'border-2 border-black btn': bordered,
    'bg-black text-white ': !bordered,
    'hover:drop-shadow-hoverXl': xl,
  });

  const buttonClasses = tcl(
    'rounded-8 flex justify-center items-center hover:cursor-pointer hover:drop-shadow-hover transition-all !text-14 leading-normal uppercase font-bold',
    buttonVariations,
    className,
  );

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
