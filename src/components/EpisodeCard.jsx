import React from 'react';
import Divider from './Divider.jsx';
import PodcastCover from './PodcastCover.jsx';
import Tags from './Tags.jsx';
import EpisodeHosts from './EpisodeHosts.jsx';

const EpisodeCard = ({ episode, title, tags, description, hosts, platforms, image, onClick }) => (
  <div
    onClick={onClick}
    className='w-[570px] border-2 border-black rounded-12 p-4 bg-white group hover:cursor-pointer hover:drop-shadow-card transition-all'
  >
    <div className='flex items-center mb-5'>
      <PodcastCover
        availablePlatforms={platforms}
        iconClassName='scale-[0.6] -translate-y-1'
        className='min-w-[166px] h-[166px] bg-cover pointer-events-none mr-5 p-[10px]'
        image={image?.data?.attributes?.url}
      />
      <div className='flex flex-col text-left font-bold'>
        <div className='text-vermillion mb-1'>Eps. {episode}</div>
        <div className='text-23 leading-140 group-hover:text-vermillion tracking-tightest'>
          {title}
        </div>
        <Divider className='mt-[15px] mb-[10px]' />
        <p className='font-medium leading-160 text-14 text-grey line-clamp-2'>{description}</p>
      </div>
    </div>
    <div className='flex justify-between'>
      <Tags tags={tags} />
      <EpisodeHosts hosts={hosts} />
    </div>
  </div>
);

export default EpisodeCard;
