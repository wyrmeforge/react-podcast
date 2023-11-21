import React, { useState } from 'react';
import { tcl } from '../utils/styles.js';

const Dropdown = ({ trigger, menu, menuClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuClasses = tcl('absolute flex flex-col z-20', menuClassName);

  return (
    <div className='relative'>
      {React.cloneElement(trigger, {
        onClick: () => setIsOpen(!isOpen),
      })}
      {isOpen ? (
        <ul className={menuClasses}>
          {menu?.map((menuItem, idx) => (
            <li className='mb-1' key={idx}>
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem?.props?.onClick?.();
                  setIsOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
