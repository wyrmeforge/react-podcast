import React from 'react';
import Carousel from '../../../components/Carousel/Carousel.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Quote from '../../../components/Quote.jsx';
import { SpotifyWhite } from '../../../components/Icons/index.js';

const TestimonialsSection = () => {
  const testimonialsCarousel = [
    {
      text:
        'Lorem ipsum dolor sit amet consectet \n' +
        'piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      username: 'Luna lovegood,',
      jobTitle: 'Spotify',
      jobIcon: <SpotifyWhite fill='#1ED760' />,
    },
    {
      text:
        'Lorem ipsum dolor sit amet consectet \n' +
        'piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      username: 'Luna lovegood,',
      jobTitle: 'Spotify',
    },
    {
      text:
        'Lorem ipsum dolor sit amet consectet \n' +
        'piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      username: 'Luna lovegood,',
      jobTitle: 'Spotify',
    },
  ];

  return (
    <SectionContainer
      title='What our listeners say'
      titleWithIcon
      titleClassName='before:!left-[-70px]'
      subtitle='Their experience throughout every platform'
      className='bg-alice pb-[208px]'
    >
      <Carousel arrowClassName='-bottom-25' arrows infinite className='pl-35 flex'>
        {testimonialsCarousel.map((item, idx) => (
          <Quote
            key={idx}
            textClassName='pt-9 px-0 pb-8 max-w-none text-23 leading-160 font-medium text-left'
            className='bg-white w-[570px] rounded-8 items-start px-10 h-[360px] mr-5'
            {...item}
          />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default TestimonialsSection;
