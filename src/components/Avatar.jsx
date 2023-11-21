import React from 'react';
import { tcl } from '../utils/styles.js';
import Image from './Image.jsx';

const Avatar = ({ className, imageUrl }) => {
  const containerClasses = tcl('w-12 h-12', className);

  if (!imageUrl) return;

  return (
    <div className={containerClasses}>
      <Image alt='User Picture' className='w-full h-full rounded-full' src={imageUrl} />
    </div>
  );
};

export default Avatar;
