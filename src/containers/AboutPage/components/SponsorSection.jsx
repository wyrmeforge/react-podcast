import React from 'react';
import Carousel from '../../../components/Carousel/Carousel.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import {
  GooglePodcastColorXL,
  SpotifyColorXL,
  YoutubeColorXL,
} from '../../../components/Icons/index.js';
import Divider from '../../../components/Divider.jsx';

const SponsorCard = ({ icon, text }) => (
  <div className='border-2 rounded-12 py-10 flex flex-col relative bg-white w-[570px] items-center px-10 h-[245px] mr-5'>
    {icon}
    <Divider className='mt-5 mb-[30px]' />
    <div className='text-14 text-grey font-medium leading-160'>{text}</div>
  </div>
);

const SponsorSection = () => {
  const sponsorsData = [
    {
      text: 'Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.',
      icon: <GooglePodcastColorXL />,
    },
    {
      text: 'Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.',
      icon: <SpotifyColorXL />,
    },
    {
      text: 'Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.',
      icon: <YoutubeColorXL />,
    },
  ];

  return (
    <SectionContainer
      title='Our Sponsors'
      subtitle='Check out our current official sponsors'
      className='bg-champagne'
    >
      <Carousel arrowClassName='-bottom-25' arrows className='pl-35 flex'>
        {sponsorsData.map((sponsor, idx) => (
          <SponsorCard key={idx} icon={sponsor?.icon} text={sponsor?.text} />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default SponsorSection;
