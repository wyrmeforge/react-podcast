import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import { useParams } from 'react-router-dom';
import EpisodesSection from './components/EpisodesSection.jsx';

const PodcastDetailPage = () => {
  let { podcastId } = useParams();

  return (
    <>
      {podcastId && <HeroSection podcastId={podcastId} />}
      <EpisodesSection />
    </>
  );
};

export default PodcastDetailPage;
