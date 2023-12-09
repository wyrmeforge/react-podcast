import React from 'react';
import SectionContainer from '../components/Structure/SectionContainer.jsx';
import Button from '../components/Button.jsx';
import MaxWidthContainer from '../components/Structure/MaxWidthContainer.jsx';
import phone_screen_trending_image from '/phone_screen_trending.png';
import phone_screen_now_playing from '/phone_screen_now_playing.png';
import { GooglePodcastWhite, SpotifyWhite, YoutubeWhite } from '../components/Icons/index.js';
import Badge from '../components/Badge.jsx';
import Image from '../components/Image.jsx';
import useIsMobile from '../hooks/useIsMobile.js';

const CtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <SectionContainer
      withScribble={false}
      title='Available now Pod of Cast App'
      subtitle='We just launched our podcast app!'
      className='bg-alice relative pt-[100px] md:pt-[188px] overflow-hidden'
      titleClassName='md:max-w-[486px] mx-auto'
    >
      <Badge
        className='text-vermillion absolute top-15 md:top-[140px] left-[43%] md:left-[48%] py-0'
        text='Beta'
      />
      {!isMobile && (
        <Image
          alt='phone_screen_trending_image'
          className='absolute left-0 bottom-0'
          src={phone_screen_trending_image}
        />
      )}
      <MaxWidthContainer>
        <Button className='mx-auto mb-6 md:mt-35' xl={!isMobile}>
          Download now
        </Button>
        <div className='mb-[10px] text-14 text-grey'>Content also available on:</div>
        <div className='flex w-full max-w-[112px] justify-between mx-auto'>
          <GooglePodcastWhite className='[&_path]:fill-black' />
          <SpotifyWhite fill='#000' />
          <YoutubeWhite fill='#000' />
        </div>
      </MaxWidthContainer>
      {!isMobile && (
        <Image
          alt='phone_screen_now_playing'
          className='absolute right-0 top-20'
          src={phone_screen_now_playing}
        />
      )}
    </SectionContainer>
  );
};

export default CtaSection;
