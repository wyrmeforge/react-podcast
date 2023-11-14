import React from 'react';
import HeroContainer from '../../../components/Structure/HeroContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Button from '../../../components/Button.jsx';
import Carousel from '../../../components/Carousel/Carousel.jsx';
import PodcastCover from '../../../components/PodcastCover.jsx';
import covid19 from '../../../assets/images/covid-19-endemic.png';
import selfConfidence from '../../../assets/images/self-confidence.png';
import Perplexed from '../../../assets/images/perplexed_mind.png';
import social from '../../../assets/images/social_class.png';
import woman from '../../../assets/images/womens_rights.png';
import tesla from '../../../assets/images/tesla_autopilot.png';
import {
  GooglePodcastColorXL,
  SpotifyColorXL,
  YoutubeColorXL,
} from '../../../components/Icons/index.js';

const recentEpisodes = [
  {
    title: 'COVID-19 Endemic',
    backgroundUrl: covid19,
  },
  {
    title: 'Self–confidence',
    backgroundUrl: selfConfidence,
  },
  {
    title: 'Perplexed Mind',
    backgroundUrl: Perplexed,
  },
  {
    title: 'Social Class',
    backgroundUrl: social,
  },
  {
    title: 'Women’s Rights',
    backgroundUrl: woman,
  },
  {
    title: 'Tesla Autopilot',
    backgroundUrl: tesla,
  },
];

const HeroSection = () => (
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
      {recentEpisodes?.map((item, idx) => (
        <PodcastCover className='w-[373px] mb-5 mr-5 h-[373px]' key={idx} {...item} />
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

export default HeroSection;
