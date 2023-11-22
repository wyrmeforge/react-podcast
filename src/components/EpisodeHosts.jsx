import React from 'react';
import Image from './Image.jsx';
import { tcl } from '../utils/styles.js';

const EpisodeHosts = ({ hosts, showNames }) => {
  if (!hosts?.length) return null;

  return (
    <div className='text-14 text-grey flex items-center'>
      {hosts?.map(({ image }, idx) => (
        <Image
          key={idx}
          className={tcl('w-9 h-9 rounded-full border-2 border-white mr-[10px]', {
            '-ml-6': idx !== 0,
            hidden: idx >= 2,
            'order-2': !showNames,
          })}
          src={image?.data?.attributes?.url}
        />
      ))}
      <span className={tcl({ 'order-1': !showNames })}>Hosted by:&nbsp;</span>
      {showNames &&
        hosts?.map(({ name }, idx) => (
          <div key={idx} className={tcl('text-vermillion mr-1 font-bold', { hidden: idx >= 2 })}>
            {name}
            {idx === 0 && ','}
          </div>
        ))}
    </div>
  );
};

export default EpisodeHosts;
