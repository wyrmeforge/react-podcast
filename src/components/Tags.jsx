import React from 'react';
import { tcl } from '../utils/styles.js';

const Tags = ({ tags, className }) => (
  <div className={tcl('flex', className)}>
    {tags?.data?.map(({ attributes: { name } }, idx) => (
      <div
        className='px-1 md:px-3 pt-[2px] md:py-[5px] rounded-4 border-grey border mr-[6px] last:mr-0 text-12 text-grey '
        key={idx}
      >
        {name}
      </div>
    ))}
  </div>
);

export default Tags;
