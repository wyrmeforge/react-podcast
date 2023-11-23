import React from 'react';

const Tags = ({ tags }) => (
  <div className='flex'>
    {tags?.data.map(({ attributes: { name } }, idx) => (
      <div
        className='px-3 py-[5px] rounded-4 border-grey border mr-[6px] text-12 text-grey'
        key={idx}
      >
        {name}
      </div>
    ))}
  </div>
);

export default Tags;
