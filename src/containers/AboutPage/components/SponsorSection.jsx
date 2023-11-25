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
  <div className='border-2 rounded-12 p-6 flex flex-col relative bg-white w-[370px] md:w-[570px] text-left items-center h-[245px] mr-5'>
    {icon}
    <Divider className='my-3 md:mt-5 md:mb-8' />
    <div className='text-12 md:text-14 text-grey leading-160'>{text}</div>
  </div>
);

const SponsorSection = () => {
  const sponsorsData = [
    {
      text: 'Join us in extending a warm welcome to our esteemed sponsors. Their support empowers us to bring you high-quality content and exciting episodes. We are grateful for their partnership on this podcasting journey.',
      icon: <GooglePodcastColorXL />,
    },
    {
      text: 'A big shoutout to our incredible sponsors! Their commitment to our podcast enhances your listening experience. Discover the impact of their support as we explore a diverse range of engaging topics together.',
      icon: <SpotifyColorXL />,
    },
    {
      text: 'Cheers to our valued sponsors who make this podcast possible. Their dedication fuels our passion for delivering top-notch content. Explore the world of podcasts with us, supported by these amazing partners.',
      icon: <YoutubeColorXL />,
    },
  ];

  return (
    <SectionContainer
      title='Our Sponsors'
      subtitle='Check out our current official sponsors'
      className='bg-champagne'
    >
      <Carousel arrowClassName='-bottom-15 md:-bottom-25' arrows className='pl-10 md:pl-35 flex'>
        {sponsorsData.map(({ icon, text }, idx) => (
          <SponsorCard key={idx} icon={icon} text={text} />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default SponsorSection;
