import React, { useEffect, useRef, useState } from 'react';
import { tcl } from '../utils/styles.js';
import useOutsideClick from '../hooks/useOutsideClick.js';

const Dropdown = ({ trigger, menu, menuClassName, listItemClassName, handleIsOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    handleIsOpen(isOpen);
  }, [isOpen]);

  return (
    <div className='relative' ref={ref}>
      {React.cloneElement(trigger, {
        onClick: () => setIsOpen(!isOpen),
      })}
      {isOpen ? (
        <ul className={tcl('absolute flex flex-col z-20', menuClassName)}>
          {menu?.map((menuItem, idx) => (
            <li className={tcl('mb-1', listItemClassName)} key={idx}>
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
