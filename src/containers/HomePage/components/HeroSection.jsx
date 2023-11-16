import React from 'react';
import HeroContainer from '../../../components/Structure/HeroContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Button from '../../../components/Button.jsx';
import Carousel from '../../../components/Carousel/Carousel.jsx';
import PodcastCover from '../../../components/PodcastCover.jsx';
import {
  GooglePodcastColorXL,
  SpotifyColorXL,
  YoutubeColorXL,
} from '../../../components/Icons/index.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as routePaths from '../../../consts/router/routerPaths.js';
import { selectAllPodcasts } from '../../../store/podcast/podcastsSelector.js';

const HeroSection = () => {
  const navigate = useNavigate();
  const podcasts = useSelector(selectAllPodcasts);

  const onPodcastClick = (podcastId) => {
    navigate(`${routePaths.PODCAST_DETAILS}/${podcastId}`);
  };

  return (
    <HeroContainer customClassName='pt-16 pb-35'>
      <MaxWidthContainer customClassName='flex flex-col items-center text-center'>
        <h1 className='mb-10 max-w-lg'>
          Your Daily <span className='text-vermillion'>Podcast</span>
        </h1>
        <p className='mb-15 max-w-[374px] text-grey text-16'>
          We cover all kinds of categories and a weekly special guest.
        </p>
        <Button xl>Subscribe</Button>
      </MaxWidthContainer>
      <Carousel className='py-30' centerMode infinite autoplay centerPadding='-15'>
        {podcasts?.map((item) => (
          <PodcastCover
            key={item.id}
            data={item}
            className='w-[373px] mb-5 mr-5 h-[373px]'
            onClick={() => onPodcastClick(item.id)}
          />
        ))}
      </Carousel>
      <MaxWidthContainer customClassName='border-y-2 border-grey py-11'>
        <div className='flex justify-between items-center pr-19'>
          <div className='text-23 leading-140 font-bold tracking-tighter mr-33'>Supported by:</div>
          <GooglePodcastColorXL />
          <SpotifyColorXL />
          <YoutubeColorXL />
        </div>
      </MaxWidthContainer>
    </HeroContainer>
  );
};

export default HeroSection;
