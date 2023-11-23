import React from 'react';
import SectionContainer from '../components/Structure/SectionContainer.jsx';
import Button from '../components/Button.jsx';
import MaxWidthContainer from '../components/Structure/MaxWidthContainer.jsx';
import phone_screen_trending_image from '../assets/images/phone_screen_trending.png';
import phone_screen_now_playing from '../assets/images/phone_screen_now_playing.png';
import { GooglePodcastWhite, SpotifyWhite, YoutubeWhite } from '../components/Icons/index.js';
import Badge from '../components/Badge.jsx';
import Image from '../components/Image.jsx';

const CtaSection = () => (
  <SectionContainer
    withScribble={false}
    title='Available now Pod of Cast App'
    subtitle='We just launched our podcast app!'
    className='bg-alice relative pt-[188px] overflow-hidden'
    titleClassName='max-w-[486px] mx-auto'
  >
    <Badge className='text-vermillion absolute top-[140px] left-[48%] py-0' text='Beta' />
    <Image
      alt='phone_screen_trending_image'
      className='absolute left-0 bottom-0'
      src={phone_screen_trending_image}
    />
    <MaxWidthContainer>
      <Button className='mx-auto mb-6 mt-35' xl>
        Download now
      </Button>
      <div className='mb-[10px] text-14 text-grey'>Content also available on:</div>
      <div className='flex w-full max-w-[112px] justify-between mx-auto'>
        <GooglePodcastWhite className='[&_path]:fill-black' />
        <SpotifyWhite fill='#000' />
        <YoutubeWhite fill='#000' />
      </div>
    </MaxWidthContainer>
    <Image
      alt='phone_screen_now_playing'
      className='absolute right-0 top-20'
      src={phone_screen_now_playing}
    />
  </SectionContainer>
);

export default CtaSection;
