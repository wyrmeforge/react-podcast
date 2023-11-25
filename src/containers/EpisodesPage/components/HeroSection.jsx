import React, { useEffect, useState } from 'react';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import { makeSelectPodcastById } from '../../../store/podcast/podcastsSelector.js';
import { useSelector } from 'react-redux';
import PodcastCover from '../../../components/PodcastCover.jsx';
import Divider from '../../../components/Divider.jsx';
import Button from '../../../components/Button.jsx';
import Tags from '../../../components/Tags.jsx';
import Badge from '../../../components/Badge.jsx';
import { formatTimestamp } from '../../../utils/dates.js';
import { PlayIcon } from '../../../components/Icons/index.js';
import VideoPlayer from '../../../components/VideoPlayer.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import EpisodeHosts from '../../../components/EpisodeHosts.jsx';
import useIsMobile from '../../../hooks/useIsMobile.js';

const Header = ({ episode, isFeatured, title, description }) => (
  <>
    <div className='flex justify-between items-center mb-4 text-left'>
      {episode && <div className='font-bold text-vermillion'>Episode {episode}</div>}
      {isFeatured && <Badge text='Featured episode' />}
    </div>
    <div className='text-30 md:text-37 text-left font-bold leading-none tracking-tighter'>
      {title}
    </div>
    <Divider className='my-5' />
    <div className='text-14 md:text-16 text-left text-grey mb-5 md:mb-10'>{description}</div>
  </>
);

const PlayButton = ({ onClick, episodeTime, isPlayerVisible, isMobile }) => {
  const buttonContent = isPlayerVisible ? (
    'Close'
  ) : (
    <>
      <PlayIcon className='mr-[10px]' />
      <span className=' text-12 md:text-16'>Listen now</span>
      <span className='text-vermillion text-12 md:text-16 lowercase ml-2'>({episodeTime})</span>
    </>
  );

  return (
    <Button onClick={onClick} className='bg-champagne' xl={!isMobile} bordered>
      {buttonContent}
    </Button>
  );
};

const HeroSection = ({ podcastId }) => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const podcastDetails = useSelector(makeSelectPodcastById(podcastId));

  const isMobile = useIsMobile();

  useEffect(() => {
    setIsPlayerVisible(false);
  }, [podcastDetails]);

  if (!podcastDetails) return null;

  const {
    image,
    episode,
    isFeatured,
    url,
    title,
    description,
    hosts,
    tags,
    publishedAt,
    episodeTime,
  } = podcastDetails.attributes;

  const onPlayButtonClick = () => {
    setIsPlayerVisible(!isPlayerVisible);
  };

  return (
    <SectionContainer withScribble={false} className='bg-champagne !pt-10  md:!pt-25 !pb-10'>
      <MaxWidthContainer>
        <div className='flex flex-col md:flex-row items-center z-20 mb-10 md:mb-20'>
          <div className='h-[350px] md:h-[472px] w-full mb-10 md:mb-0 md:min-w-[472px] md:mr-[118px] drop-shadow-cover'>
            {isPlayerVisible ? (
              <VideoPlayer
                url={url}
                className='h-full w-full hover:cursor-pointer'
                setIsPlayerVisible={setIsPlayerVisible}
                isVisible={isPlayerVisible}
              />
            ) : (
              <PodcastCover className='h-full w-full' image={image?.data?.attributes?.url} />
            )}
          </div>
          <div className='w-full md:w-auto'>
            <Header
              episode={episode}
              isFeatured={isFeatured}
              title={title}
              description={description}
            />
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-5 md:mb-15'>
              <EpisodeHosts hosts={hosts} showNames />
              <div className='text-14 mt-2 md:mt-0 text-grey'>{formatTimestamp(publishedAt)}</div>
            </div>
            <div className='flex flex-col'>
              <Button className='mb-5 md:mb-0 md:mr-5' xl={!isMobile}>
                Subscribe
              </Button>
              <PlayButton
                isMobile={isMobile}
                isPlayerVisible={isPlayerVisible}
                onClick={onPlayButtonClick}
                episodeTime={episodeTime}
              />
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='text-14 font-bold text-grey mr-10 md:mr-15'>Tags:</div>
          <Tags tags={tags} />
        </div>
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default HeroSection;
