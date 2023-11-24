import React from 'react';
import { tcl } from '../utils/styles.js';

const BurgerMenu = ({ isOpen, ...rest }) => {
  const lineClasses = 'w-8 h-1 bg-black rounded-12 relative transition-all origin-[1px]';

  return (
    <div {...rest} className='h-[25px] relative flex flex-col justify-between z-40 cursor-pointer'>
      <div className={tcl('rotate-0', { 'rotate-45': isOpen }, lineClasses)}></div>
      <div
        className={tcl(
          'opacity-100 translate-x-0',
          { 'opacity-0 translate-x-5': isOpen },
          lineClasses,
        )}
      ></div>
      <div className={tcl('rotate-0', { '-rotate-45': isOpen }, lineClasses)}></div>
    </div>
  );
};

export default BurgerMenu;
