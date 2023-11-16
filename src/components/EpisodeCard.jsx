import React from 'react';
import Divider from './Divider.jsx';
import PodcastCover from './PodcastCover.jsx';
import Tags from './Tags.jsx';
import Avatar from './Avatar.jsx';

const EpisodeCard = ({ episodeNumber, title, description, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='w-[570px] h-[249px] border-2 border-black rounded-12 p-4 bg-white group hover:cursor-pointer hover:drop-shadow-card transition-all'
    >
      <div className='flex items-center mb-5'>
        <PodcastCover
          iconClassName='scale-[0.5] translate-x-6 -translate-y-1'
          className='min-w-[166px] h-[166px] bg-cover pointer-events-none mr-5 p-[10px]'
          data={{ image }}
        />
        <div className='flex flex-col text-left font-bold'>
          <div className='text-vermillion leading-160 mb-1'>Eps. {episodeNumber}</div>
          <div className='text-23 leading-140 group-hover:text-vermillion tracking-tightest'>
            {title}
          </div>
          <Divider className='mt-[15px] mb-[10px]' />
          <p className='font-medium text-14 text-grey line-clamp-2'>{description}</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <Tags tags={['business', 'startup']} />
        <div className='flex items-center'>
          <span className='text-12 font-bold text-grey mr-[10px]'>Hosted by:</span>
          <div className='flex max-w-[46px] overflow-clip'>
            <Avatar className='min-w-7 h-7 border-2 border-white' />
            <Avatar className='min-w-7 h-7 border-2 border-white -ml-2 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
