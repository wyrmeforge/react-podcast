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
      titleWithIcon
      subtitle='Their experience throughout every platform'
      className='bg-alice pb-[208px]'
    >
      <Carousel arrows arrowClassName='-bottom-25' className='pl-35 flex'>
        {reviews?.map(({ id, attributes: { text, userName, platform, userAvatar } }) => (
          <Quote
            key={id}
            text={text}
            username={userName}
            platformIcon={platformIcons[platform]}
            avatarSrc={userAvatar?.data?.attributes?.url}
            textClassName='py-8 px-0 max-w-none text-23 leading-160 font-medium text-left'
            className='bg-white w-[570px] rounded-8 items-start px-10 h-90 mr-5 justify-between'
          />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default TestimonialsSection;
