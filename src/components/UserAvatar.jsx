import React from 'react';
import { tcl } from '../utils/styles.js';
import Image from './Image.jsx';

const UserAvatar = ({ className, imageUrl }) => {
  if (!imageUrl) return;

  return (
    <div className={tcl('w-8 h-8 md:w-12 md:h-12', className)}>
      <Image alt='User Picture' className='w-full h-full rounded-full' src={imageUrl} />
    </div>
  );
};

export default UserAvatar;
