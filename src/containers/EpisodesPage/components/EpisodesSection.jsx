import React, { useState, useMemo } from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Tabs from '../../../components/Tabs.jsx';
import EpisodeCard from '../../../components/EpisodeCard.jsx';
import { useSelector } from 'react-redux';
import { selectAllPodcasts } from '../../../store/podcast/podcastsSelector.js';
import { tcl } from '../../../utils/styles.js';

const tags = ['all', 'business', 'comedy', 'education', 'health', 'news', 'tech'];

const EpisodesSection = ({ podcastId, setCurrentEpisodeId }) => {
  const [activeTab, setActiveTab] = useState(tags[0]);
  const episodes = useSelector(selectAllPodcasts);

  const filteredEpisodes = useMemo(() => {
    if (activeTab === tags[0]) return episodes;

    return episodes.filter(({ attributes }) => attributes.tags.includes(activeTab));
  }, [episodes, activeTab]);

  const onCardClick = (id) => {
    setCurrentEpisodeId(id);
  };

  const tabs = tags.map((tag) => ({
    label: tag,
    content: filteredEpisodes?.length ? (
      <div className='grid grid-cols-2 gap-5'>
        {filteredEpisodes.map(({ attributes, id }) => (
          <EpisodeCard onClick={() => onCardClick(id)} key={id} {...attributes} />
        ))}
      </div>
    ) : (
      <div>No available episodes for this filter...</div>
    ),
  }));

  return (
    <SectionContainer
      className={tcl({ 'pt-10 bg-champagne': !podcastId })}
      titleClassName='mb-25'
      title='Latest Episode'
    >
      <MaxWidthContainer>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default EpisodesSection;
