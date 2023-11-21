import React, { useEffect, useState } from 'react';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Image from '../../../components/Image.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Quote from '../../../components/Quote.jsx';
import questionsImage from '../../../assets/images/illustration_questions.png';
import ideaImage from '../../../assets/images/illustration_idea.png';
import {
  GooglePodcastColorM,
  SpotifyColorM,
  YoutubeColorM,
} from '../../../components/Icons/index.js';
import reviewsService from '../../../services/reviewsService/reviewsService.js';

const REVIEW_ID = 1;

const InfoItem = ({ image, text }) => (
  <div className='flex flex-col justify-center items-center'>
    <Image src={image} alt={text} />
    <div className='max-w-[472px] mt-10'>{text}</div>
  </div>
);

const AboutSection = () => {
  const [reviewAttributes, setReviewAttributes] = useState(null);

  const fetchReview = async () => {
    try {
      const { data } = await reviewsService.getOneReview(REVIEW_ID);
      setReviewAttributes(data?.attributes);
    } catch (error) {
      console.error('Error fetching review:', error);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  const jobIcons = {
    googlePodcast: <GooglePodcastColorM />,
    spotify: <SpotifyColorM />,
    youtube: <YoutubeColorM />,
  };

  return (
    <SectionContainer
      titleClassName='mb-25 max-w-[735px]'
      title='Talk. Listen. Get inspired by every minute of it.'
    >
      <MaxWidthContainer>
        <div className='flex justify-between mb-30'>
          <InfoItem
            image={questionsImage}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
          />
          <InfoItem
            image={ideaImage}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
          />
        </div>
        <Quote
          showDecorations
          text={reviewAttributes?.text}
          avatarSrc={reviewAttributes?.userAvatar?.data?.attributes?.url}
          username={reviewAttributes?.userName}
          jobIcon={jobIcons[reviewAttributes?.platform]}
        />
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default AboutSection;
