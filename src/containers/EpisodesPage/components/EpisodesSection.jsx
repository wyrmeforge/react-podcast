import React, { useState, useMemo } from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Tabs from '../../../components/Tabs.jsx';
import EpisodeCard from '../../../components/EpisodeCard.jsx';
import { useSelector } from 'react-redux';
import { selectAllPodcasts } from '../../../store/podcast/podcastsSelector.js';
import { tcl } from '../../../utils/styles.js';
import { selectAllTags } from '../../../store/tags/tagsSelector.js';

const EpisodesSection = ({ podcastId, setCurrentEpisodeId }) => {
  const podcasts = useSelector(selectAllPodcasts);
  const tags = useSelector(selectAllTags);

  const [activeTab, setActiveTab] = useState(tags[0]?.id);

  const filteredEpisodes = useMemo(() => {
    if (activeTab === tags[0]?.id) return podcasts;

    return podcasts.filter(({ attributes: { tags: episodeTags } }) => {
      return episodeTags?.data?.some((tag) => +tag?.id === +activeTab);
    });
  }, [podcasts, activeTab, tags]);

  const tabs = tags.map(({ attributes: { name }, id }) => ({
    id,
    label: name[0].toUpperCase() + name.slice(1, name.length),
    content: filteredEpisodes?.length ? (
      <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
        {filteredEpisodes.map(({ attributes, id }) => (
          <EpisodeCard onClick={() => setCurrentEpisodeId(id)} key={id} {...attributes} />
        ))}
      </div>
    ) : (
      <div>No available episodes for this filter...</div>
    ),
  }));

  return (
    <SectionContainer
      className={tcl({ 'pt-10 bg-champagne': !podcastId })}
      titleClassName='mb-10 md:mb-25'
      title='Latest Episode'
    >
      <MaxWidthContainer>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default EpisodesSection;
