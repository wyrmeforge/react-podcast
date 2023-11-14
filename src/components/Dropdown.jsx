import React, { useState } from 'react';

const Dropdown = ({ trigger, menu, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='relative'>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {isOpen ? (
        <ul className='absolute flex flex-col z-20'>
          {menu?.map((menuItem, idx) => (
            <li key={idx}>
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
