import React from 'react';

const Tags = ({ tags }) => (
  <div className='flex'>
    {tags?.map((tag, idx) => (
      <div
        className='px-3 py-[5px] rounded-4 border-grey border mr-[6px] text-12 text-grey'
        key={idx}
      >
        {tag}
      </div>
    ))}
  </div>
);

export default Tags;
