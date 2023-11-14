import React from 'react';
import { tcl } from '../utils/styles.js';

const SectionTitle = ({ text, className, withIcon }) => {
  const titleClasses = tcl(
    'relative',
    {
      'before-base before:bg-sparkle before:w-[120px] before:h-[120px] before:left-[-75px] before:top-[-65px]':
        withIcon,
    },
    className,
  );

  return <h2 className={titleClasses}>{text}</h2>;
};

export default SectionTitle;
