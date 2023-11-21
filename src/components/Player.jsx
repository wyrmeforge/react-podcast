import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { tcl } from '../utils/styles.js';
import Loader from './Loader.jsx';

const Player = ({ className, isVisible, setIsPlayerVisible, url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isVisible) return null;

  return (
    <div className={tcl('w-full h-full flex justify-center items-center', className)}>
      <ReactPlayer
        playing={isLoaded}
        onReady={() => setIsLoaded(true)}
        onError={() => setIsPlayerVisible(false)}
        width={isLoaded ? '100%' : '0px'}
        height={isLoaded ? '100%' : '0px'}
        url={url}
      />
      {!isLoaded && <Loader className='h-full w-full' />}
    </div>
  );
};

export default Player;
