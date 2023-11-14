import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import EpisodeCard from '../../../components/EpisodeCard.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Button from '../../../components/Button.jsx';
import covid19 from '../../../assets/images/covid-19-endemic.png';
import selfConfidence from '../../../assets/images/self-confidence.png';
import Perplexed from '../../../assets/images/perplexed_mind.png';
import social from '../../../assets/images/social_class.png';
import woman from '../../../assets/images/womens_rights.png';
import tesla from '../../../assets/images/tesla_autopilot.png';
import { SparkleForkIcon } from '../../../components/Icons/index.js';

const ContentSection = () => {
  const episodes = [
    {
      episodeNumber: 4,
      title: 'Pandemic Becoming Endemic',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      imageSrc: covid19,
    },
    {
      episodeNumber: 8,
      title: 'Tesla Autopilot Controversy',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      imageSrc: selfConfidence,
    },
    {
      episodeNumber: 2,
      title: 'How to Deal with Self–Confidence',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      imageSrc: Perplexed,
    },
    {
      episodeNumber: 1,
      title: "Women's Rights? Is it alright?",
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      imageSrc: social,
    },
    {
      episodeNumber: 12,
      title: 'Type of Social Classes of People',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      imageSrc: woman,
    },
    {
      episodeNumber: 6,
      title: 'Are you a Perplexed Mind Person?',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      imageSrc: tesla,
    },
  ];

  return (
    <SectionContainer
      id='#blog'
      title='Recent Episodes'
      subtitle='Available on your favorite platform'
      className='bg-champagne'
    >
      <MaxWidthContainer>
        <SparkleForkIcon className='absolute -right-[140px] -top-[170px]' />
        <div className='grid grid-cols-2 grid-rows-3 gap-5 mb-25'>
          {episodes?.map((item, idx) => (
            <EpisodeCard key={idx} {...item} />
          ))}
        </div>
        <Button xl className='mx-auto'>
          Browse all episodes
        </Button>
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default ContentSection;
