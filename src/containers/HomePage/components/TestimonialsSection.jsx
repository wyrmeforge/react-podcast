import React from 'react';
import Carousel from '../../../components/Carousel/Carousel.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Quote from '../../../components/Quote.jsx';
import { useSelector } from 'react-redux';
import { selectAllReviews } from '../../../store/reviews/reviewsSelector.js';
import { platformIcons } from '../../../components/Icons/platformIcons.jsx';

const TestimonialsSection = ({ id }) => {
  const reviews = useSelector(selectAllReviews);

  if (!reviews) return null;

  return (
    <SectionContainer
      id={id}
      title='What our listeners say'
      subtitle='Their experience throughout every platform'
      className='bg-alice pb-[108px] md:pb-[208px]'
    >
      <Carousel arrows arrowClassName='-bottom-15 md:-bottom-25' className='pl-10 md:pl-35 flex'>
        {reviews?.map(({ id, attributes: { text, userName, platform, userAvatar } }) => (
          <Quote
            key={id}
            text={text}
            username={userName}
            platformIcon={platformIcons[platform]}
            avatarSrc={userAvatar?.data?.attributes?.url}
            textClassName='py-4 md:py-8 text-16 px-0 max-w-none md:text-23 leading-160 font-medium text-left'
            className='bg-white px-5 w-[300px] h-[240px] md:w-[570px] rounded-8 items-start md:px-10 md:h-90 mr-5 justify-between'
          />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default TestimonialsSection;
