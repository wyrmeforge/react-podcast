import React from 'react';
import MaxWidthContainer from '../components/Structure/MaxWidthContainer.jsx';
import NavBar from '../components/NavBar.jsx';
import Divider from '../components/Divider.jsx';
import {
  AppStoreIcon,
  GooglePlayIcon,
  GooglePodcastColorM,
  InstagramIcon,
  LogoIcon,
  SpotifyColorM,
  TikTokIcon,
  TwitterIcon,
  YoutubeColorM,
} from '../components/Icons/index.js';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-t-grey bg-white pt-35 pb-20 text-grey'>
      <MaxWidthContainer>
        <div className='flex justify-between'>
          <div className='w-full'>
            <div className='flex items-end mb-10'>
              <LogoIcon />
              <span className='ml-6 text-12 '>&copy;2023.</span>
            </div>
            <div className='text-14 max-w-[275px] mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className='flex max-w-[122px] justify-between w-full'>
              <TwitterIcon />
              <InstagramIcon />
              <TikTokIcon />
            </div>
          </div>
          <NavBar className='grid w-full h-full grid-cols-2 grid-rows-3 gap-5 text-black' />
          <div className='w-full'>
            <div className='mb-5'>Listen episodes on your fav platform:</div>
            <div className='flex max-w-[373px] justify-between w-full mb-15'>
              <GooglePodcastColorM />
              <SpotifyColorM />
              <YoutubeColorM />
            </div>
            <div className='mb-5'>App available on:</div>
            <div className='flex max-w-[92px] justify-between w-full'>
              <AppStoreIcon />
              <GooglePlayIcon />
            </div>
          </div>
        </div>
        <Divider className='mb-5 mt-35' />
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
