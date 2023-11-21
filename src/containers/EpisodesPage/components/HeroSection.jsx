import React from 'react';
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

const HeroSection = ({ podcastId }) => {
  const podcastDetails = useSelector(makeSelectPodcastById(podcastId));

  if (!podcastDetails) return null;

  const { image, episode, isFeatured, title, description, hosts, tags, publishedAt, episodeTime } =
    podcastDetails?.attributes || {};

  return (
    <HeroContainer withScribble={false} customClassName='pt-25 pb-10'>
      <MaxWidthContainer>
        <div className='flex items-center z-20 mb-20'>
          <PodcastCover
            className='h-[472px] min-w-[472px] bg-contain drop-shadow-cover mr-[118px]'
            image={image?.data?.attributes?.url}
          />
          <div>
            <div className='flex justify-between items-center  mb-4'>
              <div className='text-16 font-bold text-vermillion leading-160'>Episode {episode}</div>
              {isFeatured && <Badge text='Featured episode' />}
            </div>
            <div className='text-37 font-bold leading-none tracking-tighter'>{title}</div>
            <Divider className='my-5' />
            <div className='text-16 font-medium text-grey leading-160 mb-10'>{description}</div>
            <div className='flex justify-between items-center mb-[60px]'>
              {hosts?.length && (
                <div className='text-14 text-grey font-medium leading-160 flex items-center'>
                  {hosts?.map(({ image }, idx) => (
                    <Image
                      key={idx}
                      className='w-9 h-9 rounded-full mr-[10px]'
                      src={image?.data?.attributes?.url}
                    />
                  ))}
                  Hosted by:
                  {hosts?.map(({ name }, idx) => (
                    <div key={idx} className='text-vermillion font-bold mr-1'>
                      {name},
                    </div>
                  ))}
                </div>
              )}
              <div className='text-14 text-grey font-medium'>{publishedAt}</div>
            </div>
            <div className='flex'>
              <Button className='mr-5' xl>
                SUBSCRIBE
              </Button>
              <Button className='bg-champagne' xl bordered>
                LISTEN NOW {episodeTime}
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
