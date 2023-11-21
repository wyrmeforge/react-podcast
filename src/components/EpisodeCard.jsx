import React from 'react';
import Divider from './Divider.jsx';
import PodcastCover from './PodcastCover.jsx';
import Tags from './Tags.jsx';
import Avatar from './Avatar.jsx';
import { tcl } from '../utils/styles.js';

const CardFooter = ({ hosts, tags }) => (
  <div className='flex justify-between'>
    <Tags tags={tags} />
    {hosts?.length ? (
      <div className='flex items-center'>
        <span className='text-12 font-bold text-grey mr-[10px]'>Hosted by:</span>
        <div className='flex max-w-[46px] overflow-clip'>
          {hosts?.map((host, idx) => (
            <Avatar
              key={host.name}
              imageUrl={host?.image?.data?.attributes?.url}
              className={tcl('w-7 h-7 border-2 border-white rounded-full bg-contain', {
                '-ml-2': idx !== 0,
                hidden: idx >= 2,
              })}
            />
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

const EpisodeCard = ({ episode, title, tags, description, hosts, platforms, image, onClick }) => {
  return (
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
          <div className='text-vermillion leading-160 mb-1'>Eps. {episode}</div>
          <div className='text-23 leading-140 group-hover:text-vermillion tracking-tightest'>
            {title}
          </div>
          <Divider className='mt-[15px] mb-[10px]' />
          <p className='font-medium leading-160 text-14 text-grey line-clamp-2'>{description}</p>
        </div>
      </div>
      <CardFooter tags={tags} hosts={hosts} />
    </div>
  );
};

export default EpisodeCard;
