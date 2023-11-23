import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import { useParams } from 'react-router-dom';
import EpisodesSection from './components/EpisodesSection.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import { useScrollToTop } from '../../hooks/useScrollToTop.js';

const EpisodesPage = () => {
  const { podcastId } = useParams();
  const [currentEpisodeId, setCurrentEpisodeId] = useState(null);

  useEffect(() => {
    setCurrentEpisodeId(podcastId);
  }, [podcastId]);

  useDocumentTitle('Episodes');
  useScrollToTop(currentEpisodeId);

  return (
    <>
      {currentEpisodeId && <HeroSection podcastId={currentEpisodeId} />}
      <EpisodesSection setCurrentEpisodeId={setCurrentEpisodeId} podcastId={currentEpisodeId} />
    </>
  );
};

export default EpisodesPage;
