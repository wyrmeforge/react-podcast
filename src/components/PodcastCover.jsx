import React from 'react';
import { tcl } from '../utils/styles.js';
import { GooglePodcastWhite, SpotifyWhite, YoutubeWhite } from './Icons/index.js';
import Image from './Image.jsx';

const PodcastCover = ({ title, image, availablePlatforms, className, iconClassName, onClick }) => {
  const containerClasses = tcl(
    'rounded-12 p-5 flex flex-col relative justify-between hover:drop-shadow-cover hover:cursor-pointer transition-all',
    className,
  );

  const platformIcons = {
    googlePodcast: <GooglePodcastWhite />,
    youtube: <YoutubeWhite />,
    spotify: <SpotifyWhite />,
  };

  return (
    <div className={containerClasses} onClick={onClick}>
      <div className={tcl('flex justify-between gap-4 self-end z-30', iconClassName)}>
        {availablePlatforms?.map((platform, idx) => (
          <React.Fragment key={idx}>{platformIcons[platform]}</React.Fragment>
        ))}
      </div>
      <div className='font-bold text-left text-37 leading-140 tracking-[-0.08em] text-blue z-30'>
        {title}
      </div>
      <Image src={image} className='w-full h-full object-cover absolute left-0 top-0 rounded-12' />
    </div>
  );
};

export default PodcastCover;
