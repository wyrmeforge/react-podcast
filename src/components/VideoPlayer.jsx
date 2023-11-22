import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { tcl } from '../utils/styles.js';
import Loader from './Loader.jsx';

const VideoPlayer = ({ className, isVisible, setIsPlayerVisible, url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isVisible) return null;

  return (
    <div className={tcl('flex justify-center items-center', className)}>
      <ReactPlayer
        playing={isLoaded}
        onReady={() => setIsLoaded(!isLoaded)}
        onError={() => setIsPlayerVisible(!isVisible)}
        width={isLoaded ? '100%' : '0px'}
        height={isLoaded ? '100%' : '0px'}
        url={url}
      />
      {!isLoaded && <Loader className='h-full w-full' />}
    </div>
  );
};

export default VideoPlayer;
