import React, { useRef, useState } from 'react';
import { tcl } from '../utils/styles.js';
import useOutsideClick from '../hooks/useOutsideClick.js';

const Dropdown = ({ trigger, menu, menuClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className='relative' ref={ref}>
      {React.cloneElement(trigger, {
        onClick: () => setIsOpen(!isOpen),
      })}
      {isOpen ? (
        <ul className={tcl('absolute flex flex-col z-20', menuClassName)}>
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
