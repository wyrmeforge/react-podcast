import React from 'react';
import { tcl } from '../utils/styles.js';

const Badge = ({ text, className }) => {
  const badgeClasses = tcl(
    '!text-vermillion text-center text-12 uppercase py-[3px] px-[6px] border rounded-4 border-vermillion leading-160 font-bold',
    className,
  );
  return <div className={badgeClasses}>{text}</div>;
};

export default Badge;
