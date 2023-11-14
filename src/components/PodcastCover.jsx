import React from 'react';
import { tcl } from '../utils/styles.js';
import { GooglePodcastWhite, SpotifyWhite, YoutubeWhite } from './Icons/index.js';

const PodcastCover = ({ backgroundUrl, title, className, iconClassName }) => {
  const containerStyles = { backgroundImage: `url(${backgroundUrl})` };

  const containerClasses = tcl(
    'rounded-12 p-5 flex flex-col justify-between hover:drop-shadow-cover hover:cursor-pointer transition-all',
    className,
  );

  const iconClasses = tcl('flex w-full max-w-[92px] justify-between self-end', iconClassName);

  return (
    <div style={containerStyles} className={containerClasses}>
      <div className={iconClasses}>
        <GooglePodcastWhite />
        <SpotifyWhite />
        <YoutubeWhite />
      </div>
      <div className='font-bold text-37 leading-140 tracking-[-0.08em] text-blue'>{title}</div>
    </div>
  );
};

export default PodcastCover;
