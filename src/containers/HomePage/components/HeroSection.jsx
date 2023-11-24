import React from 'react';
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
import { selectAllPodcasts } from '../../../store/podcast/podcastsSelector.js';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import routerService from '../../../services/routerService.js';
import useIsMobile from '../../../hooks/useIsMobile.js';

const HeroSection = () => {
  const podcasts = useSelector(selectAllPodcasts);

  const onPodcastClick = (episodeId) => routerService.toEpisodeDetails(episodeId);
  const onSubscribeClick = () => routerService.toPricingSection();

  const isMobile = useIsMobile();

  return (
    <SectionContainer className='pb-20 pt-10 md:pt-16 md:pb-35 bg-champagne'>
      <MaxWidthContainer customClassName='flex flex-col items-center text-center'>
        <h1 className='mb-5 md:mb-10 max-w-lg'>
          Your Daily <span className='text-vermillion'>Podcast</span>
        </h1>
        <p className='mb-10 md:mb-15 max-w-[374px] text-grey text-16'>
          We cover all kinds of categories and a weekly special guest.
        </p>
        <Button onClick={onSubscribeClick} xl>
          Subscribe
        </Button>
      </MaxWidthContainer>
      <Carousel className='pt-15 md:py-30' centerMode infinite autoplay centerPadding='0'>
        {podcasts?.map(({ attributes: { title, image, platforms }, id }) => (
          <PodcastCover
            title={title}
            image={image?.data?.attributes?.url}
            availablePlatforms={platforms}
            key={id}
            className='w-80 h-80 md:w-96 md:h-96 mb-5 mr-2 md:mr-5'
            onClick={() => onPodcastClick(id)}
          />
        ))}
      </Carousel>
      {!isMobile && (
        <MaxWidthContainer customClassName='border-y-2 border-grey py-11 flex justify-between items-center pr-19'>
          <div className='text-23 leading-140 font-bold tracking-tighter mr-33'>Supported by:</div>
          <GooglePodcastColorXL />
          <SpotifyColorXL />
          <YoutubeColorXL />
        </MaxWidthContainer>
      )}
    </SectionContainer>
  );
};

export default HeroSection;
