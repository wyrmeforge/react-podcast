import React from 'react';
import SectionContainer from '../components/Structure/SectionContainer.jsx';
import Button from '../components/Button.jsx';
import MaxWidthContainer from '../components/Structure/MaxWidthContainer.jsx';

import phone_screen_trending_image from '../assets/images/phone_screen_trending.png';
import phone_screen_now_playing from '../assets/images/phone_screen_now_playing.png';
import { GooglePodcastWhite, SpotifyWhite, YoutubeWhite } from '../components/Icons/index.js';
import { tcl } from '../utils/styles.js';

const CtaSection = () => {
  const titleBadgeClasses = `
    before:!text-vermillion before:text-14 before:uppercase before:pt-[2px]
    before-base before:content-["Beta"] before:-top-5 before:left-[45%]
    before:h-7 before:w-[52px] before:border before:rounded-4 before:border-vermillion 
    before:leading-160 before:font-bold
  `;

  return (
    <SectionContainer
      withScribble={false}
      title='Available now Pod of Cast App'
      subtitle='We just launched our podcast app!'
      className='bg-alice relative h-[816px]'
      titleClassName={tcl('max-w-[486px] mx-auto pt-5 mt-[52px] ', titleBadgeClasses)}
      subtitleClassName='mb-[140px]'
    >
      <img
        alt='phone_screen_trending_image'
        className='absolute left-0 bottom-0'
        src={phone_screen_trending_image}
      />
      <MaxWidthContainer>
        <Button className='mx-auto mb-6' xl>
          Download now
        </Button>
        <p className='mb-[10px] text-14 text-grey font-medium'>Content also available on:</p>
        <div className='flex w-full max-w-[112px] justify-between mx-auto'>
          <GooglePodcastWhite className='[&_path]:fill-black' />
          <SpotifyWhite fill='#000' />
          <YoutubeWhite fill='#000' />
        </div>
      </MaxWidthContainer>
      <img
        alt='phone_screen_now_playing'
        className='absolute right-0 top-20'
        src={phone_screen_now_playing}
      />
    </SectionContainer>
  );
};

export default CtaSection;
