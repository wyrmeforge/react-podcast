import React, { useState, useMemo } from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Tabs from '../../../components/Tabs.jsx';
import EpisodeCard from '../../../components/EpisodeCard.jsx';
import { useSelector } from 'react-redux';
import { selectAllPodcasts } from '../../../store/podcast/podcastsSelector.js';

const tags = ['All', 'Business', 'Comedy', 'Education', 'Health', 'News', 'Tech'];

const EpisodesSection = () => {
  const [activeTab, setActiveTab] = useState(tags[0]);
  const episodes = useSelector(selectAllPodcasts);

  const filteredEpisodes = useMemo(() => {
    return episodes.filter((item) =>
      activeTab === tags[0] ? true : item.tags.includes(activeTab),
    );
  }, [episodes, activeTab]);

  const tabs = tags.map((tag) => ({
    label: tag,
    content: filteredEpisodes?.length ? (
      <div className='grid grid-cols-2 gap-5'>
        {filteredEpisodes.map((item, idx) => (
          <EpisodeCard key={idx} {...item} />
        ))}
      </div>
    ) : (
      <div>No available episodes for this filter...</div>
    ),
  }));

  return (
    <SectionContainer titleClassName='mb-25' title='Latest Episode'>
      <MaxWidthContainer>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default EpisodesSection;
