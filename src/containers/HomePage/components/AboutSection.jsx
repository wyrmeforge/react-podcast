import React from 'react';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Image from '../../../components/Image.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Quote from '../../../components/Quote.jsx';
import questionsImage from '/illustration_questions.png';
import ideaImage from '/illustration_idea.png';
import { useSelector } from 'react-redux';
import { makeSelectReviewById } from '../../../store/reviews/reviewsSelector.js';
import { platformIcons } from '../../../components/Icons/platformIcons.jsx';

const DEFAULT_REVIEW_ID = 1;

const AboutSection = () => {
  const review = useSelector(makeSelectReviewById(DEFAULT_REVIEW_ID));

  const { text, userAvatar, userName, platform } = review?.attributes || {};

  const sectionInfo = [
    {
      text: 'Elevate Your Mind: Unleashing Inspiration through Engaging Conversations',
      image: questionsImage,
    },
    {
      text: 'The Power of Dialogue: Finding Inspiration in Every Podcast Moment',
      image: ideaImage,
    },
  ];

  return (
    <SectionContainer
      titleClassName='mb-10 md:mb-25 md:max-w-[735px]'
      title='Talk. Listen. Get inspired by every minute of it.'
    >
      <MaxWidthContainer>
        <div className='flex flex-col md:flex-row justify-between'>
          {sectionInfo?.map(({ text, image }, idx) => (
            <div
              key={idx}
              className='flex mb-10 text-left md:mb-0 md:text-center md:flex-col justify-center items-center'
            >
              <Image className='w-[35%] md:w-auto' src={image} alt={text} />
              <div className='ml-5 text-14 md:ml-0 md:text-16 md:mt-10'>{text}</div>
            </div>
          ))}
        </div>
        {review ? (
          <Quote
            className='md:mt-30'
            text={text}
            avatarSrc={userAvatar?.data?.attributes?.url}
            username={userName}
            platformIcon={platformIcons[platform]}
          />
        ) : null}
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default AboutSection;
