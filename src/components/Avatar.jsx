import React from 'react';
import avatar from '../assets/images/avatar.jpg';
import { tcl } from '../utils/styles.js';

const Avatar = ({ className }) => {
  const containerClasses = tcl('w-12 h-12', className);
  return (
    <div className={containerClasses}>
      <img alt='User Picture' className='w-auto h-auto rounded-full' src={avatar} />
    </div>
  );
};

export default Avatar;
