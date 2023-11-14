import React from 'react';
import { tcl } from '../utils/styles.js';

const Divider = ({ className }) => {
  return <div className={tcl('h-[0.5px] bg-grey w-full', className)}></div>;
};

export default Divider;
