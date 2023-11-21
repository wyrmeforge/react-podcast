import React, { useEffect, useState } from 'react';
import HeroContainer from '../../../components/Structure/HeroContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import { makeSelectPodcastById } from '../../../store/podcast/podcastsSelector.js';
import { useSelector } from 'react-redux';
import PodcastCover from '../../../components/PodcastCover.jsx';
import Divider from '../../../components/Divider.jsx';
import Button from '../../../components/Button.jsx';
import Tags from '../../../components/Tags.jsx';
import Badge from '../../../components/Badge.jsx';
import Image from '../../../components/Image.jsx';
import { tcl } from '../../../utils/styles.js';
import { formatTimestamp } from '../../../utils/dates.js';
import { PlayIcon } from '../../../components/Icons/index.js';
import Player from '../../../components/Player.jsx';

const SectionContentHeader = ({ episode, isFeatured, title, description }) => (
  <>
    <div className='flex justify-between items-center  mb-4'>
      {episode && <div className='font-bold text-vermillion'>Episode {episode}</div>}
      {isFeatured && <Badge text='Featured episode' />}
    </div>
    <div className='text-37 font-bold leading-none tracking-tighter'>{title}</div>
    <Divider className='my-5' />
    <div className='text-16 text-grey mb-10'>{description}</div>
  </>
);

const SectionContentMain = ({ hosts, publishedAt }) => {
  const HostImages = () =>
    hosts?.map(({ image }, idx) => (
      <Image
        key={idx}
        className={tcl('w-9 h-9 rounded-full border-2 border-white mr-[10px]', {
          '-ml-6': idx !== 0,
          hidden: idx >= 2,
        })}
        src={image?.data?.attributes?.url}
      />
    ));

  const HostNames = () =>
    hosts?.map(({ name }, idx) => (
      <div key={idx} className={tcl('text-vermillion font-bold mr-1', { hidden: idx >= 2 })}>
        {name}
        {idx === 0 && ','}
      </div>
    ));

  return (
    <div className='flex justify-between items-center mb-15'>
      {hosts?.length ? (
        <div className='text-14 text-grey flex items-center'>
          <HostImages />
          Hosted by:&nbsp;
          <HostNames />
        </div>
      ) : null}
      <div className='text-14 text-grey font-medium'>{formatTimestamp(publishedAt)}</div>
    </div>
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
  } = podcastDetails?.attributes || {};

  const onPlayButtonClick = () => {
    setIsPlayerVisible(!isPlayerVisible);
  };

  return (
    <HeroContainer withScribble={false} customClassName='pt-25 pb-10'>
      <MaxWidthContainer>
        <div className='flex items-center z-20 mb-20'>
          {isPlayerVisible ? (
            <Player
              url={url}
              className='h-[472px] min-w-[572px] mr-[118px]  drop-shadow-cover'
              setIsPlayerVisible={setIsPlayerVisible}
              isVisible={isPlayerVisible}
            />
          ) : (
            <PodcastCover
              className='h-[472px] min-w-[472px] bg-contain drop-shadow-cover mr-[118px]'
              image={image?.data?.attributes?.url}
            />
          )}
          <div className='relative'>
            <SectionContentHeader
              episode={episode}
              isFeatured={isFeatured}
              title={title}
              description={description}
            />
            <SectionContentMain hosts={hosts} publishedAt={publishedAt} />
            <div className='flex'>
              <Button className='mr-5' xl>
                Subscribe
              </Button>
              <Button onClick={onPlayButtonClick} className='bg-champagne' xl bordered>
                {isPlayerVisible ? (
                  'Close'
                ) : (
                  <>
                    <PlayIcon className='mr-[10px]' /> Listen now
                    <span className='text-vermillion lowercase ml-2'>({episodeTime})</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <span className='text-14 font-bold text-grey mr-[60px] leading-160'>Tags:</span>
          <Tags tags={tags} />
        </div>
      </MaxWidthContainer>
    </HeroContainer>
  );
};

export default HeroSection;
