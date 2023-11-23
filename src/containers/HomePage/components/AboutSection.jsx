import React from 'react';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Image from '../../../components/Image.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Quote from '../../../components/Quote.jsx';
import questionsImage from '../../../assets/images/illustration_questions.png';
import ideaImage from '../../../assets/images/illustration_idea.png';
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
      titleClassName='mb-25 max-w-[735px]'
      title='Talk. Listen. Get inspired by every minute of it.'
    >
      <MaxWidthContainer>
        <div className='flex justify-between'>
          {sectionInfo?.map(({ text, image }, idx) => (
            <div key={idx} className='flex flex-col justify-center items-center'>
              <Image src={image} alt={text} />
              <div className='max-w-[472px] mt-10'>{text}</div>
            </div>
          ))}
        </div>
        {review ? (
          <Quote
            className='mt-30'
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
