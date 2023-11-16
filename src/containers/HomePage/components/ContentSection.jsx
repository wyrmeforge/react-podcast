import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import EpisodeCard from '../../../components/EpisodeCard.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Button from '../../../components/Button.jsx';
import { SparkleForkIcon } from '../../../components/Icons/index.js';
import { useSelector } from 'react-redux';
import { selectAllPodcasts } from '../../../store/podcast/podcastsSelector.js';
import { useNavigate } from 'react-router-dom';
import * as routePaths from '../../../consts/router/routerPaths.js';

const ContentSection = ({ id }) => {
  const episodes = useSelector(selectAllPodcasts);
  const navigate = useNavigate();

  return (
    <SectionContainer
      id={id}
      title='Recent Episodes'
      subtitle='Available on your favorite platform'
      className='bg-champagne'
    >
      <MaxWidthContainer>
        <SparkleForkIcon className='absolute -right-[140px] -top-[170px]' />
        <div className='grid grid-cols-2 grid-rows-3 gap-5 mb-25'>
          {episodes?.map((item, idx) => (
            <EpisodeCard onClick={() => navigate(`details/${item.id}`)} key={idx} {...item} />
          ))}
        </div>
        <Button xl className='mx-auto' onClick={() => navigate(routePaths.PODCAST_DETAILS)}>
          Browse all episodes
        </Button>
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default ContentSection;
