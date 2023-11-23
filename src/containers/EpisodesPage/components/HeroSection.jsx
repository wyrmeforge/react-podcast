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

const Header = ({ episode, isFeatured, title, description }) => (
  <>
    <div className='flex justify-between items-center mb-4 text-left'>
      {episode && <div className='font-bold text-vermillion'>Episode {episode}</div>}
      {isFeatured && <Badge text='Featured episode' />}
    </div>
    <div className='text-37 text-left font-bold leading-none tracking-tighter'>{title}</div>
    <Divider className='my-5' />
    <div className='text-16 text-left text-grey mb-10'>{description}</div>
  </>
);

const PlayButton = ({ onClick, episodeTime, isPlayerVisible }) => {
  const buttonContent = isPlayerVisible ? (
    'Close'
  ) : (
    <>
      <PlayIcon className='mr-[10px]' /> Listen now
      <span className='text-vermillion lowercase ml-2'>({episodeTime})</span>
    </>
  );

  return (
    <Button onClick={onClick} className='bg-champagne' xl bordered>
      {buttonContent}
    </Button>
  );
};

const HeroSection = ({ podcastId }) => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const podcastDetails = useSelector(makeSelectPodcastById(podcastId));

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
    <SectionContainer withScribble={false} className='bg-champagne pt-25 pb-10'>
      <MaxWidthContainer>
        <div className='flex items-center z-20 mb-20'>
          <div className='h-[472px] min-w-[472px] mr-[118px] drop-shadow-cover'>
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
          <div>
            <Header
              episode={episode}
              isFeatured={isFeatured}
              title={title}
              description={description}
            />
            <div className='flex justify-between items-center mb-15'>
              <EpisodeHosts hosts={hosts} showNames />
              <div className='text-14 text-grey font-medium'>{formatTimestamp(publishedAt)}</div>
            </div>
            <div className='flex'>
              <Button className='mr-5' xl>
                Subscribe
              </Button>
              <PlayButton
                isPlayerVisible={isPlayerVisible}
                onClick={onPlayButtonClick}
                episodeTime={episodeTime}
              />
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='text-14 font-bold text-grey mr-[60px]'>Tags:</div>
          <Tags tags={tags} />
        </div>
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default HeroSection;
