import React from 'react';
import MaxWidthContainer from './MaxWidthContainer.jsx';
import Navigation from '../Navigation.jsx';
import Divider from '../Divider.jsx';
import { GooglePodcastColorM, LogoIcon, SpotifyColorM, YoutubeColorM } from '../Icons/index.js';

const Footer = () => {
  return (
    <footer className='w-full border-t-[1.5px] border-t-grey bg-white pt-[140px] pb-20 font-medium text-grey leading-160'>
      <MaxWidthContainer>
        <div className='flex justify-between'>
          <div className='w-full'>
            <div className='flex items-end mb-20'>
              <LogoIcon />
              <span className='ml-6 text-12 '>&copy;2021.</span>
            </div>
            <div className='text-14 max-w-[275px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <Navigation className='grid w-full h-full mr-[124px] grid-cols-2 grid-rows-3 gap-5 max-w-[270px] text-black' />
          <div className='w-full'>
            <div className='mb-7 text-16'>Listen episodes on your fav platform:</div>
            <div className='flex max-w-[373px] justify-between w-full'>
              <GooglePodcastColorM />
              <SpotifyColorM />
              <YoutubeColorM />
            </div>
          </div>
        </div>
        <Divider className='mb-5  mt-[140px]' />
        <div className='text-12 flex justify-between'>
          <div>
            &#64;2022. All Rights Reserved. <span className='text-vermillion'>Pod of Cast</span>
          </div>
          <div>Terms • Privacy</div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
