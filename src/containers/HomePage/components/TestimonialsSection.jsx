import React, { useEffect, useState } from 'react';
import Carousel from '../../../components/Carousel/Carousel.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Quote from '../../../components/Quote.jsx';
import {
  GooglePodcastColorM,
  SpotifyColorM,
  YoutubeColorM,
} from '../../../components/Icons/index.js';
import reviewsService from '../../../services/reviewsService/reviewsService.js';
import Loader from '../../../components/Loader.jsx';

const TestimonialsSection = ({ id }) => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const { data } = await reviewsService.getAllReviews();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const jobIcons = {
    googlePodcast: <GooglePodcastColorM />,
    spotify: <SpotifyColorM />,
    youtube: <YoutubeColorM />,
  };

  if (loading) return <Loader className='h-10 bg-alice' />;
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
        {reviews?.map(({ id, attributes }) => (
          <Quote
            key={id}
            text={attributes?.text}
            username={attributes?.userName}
            jobIcon={jobIcons[attributes?.platform]}
            avatarSrc={attributes?.userAvatar?.data?.attributes?.url}
            textClassName='pt-9 px-0 pb-8 max-w-none text-23 leading-160 font-medium text-left'
            className='bg-white w-[570px] rounded-8 items-start px-10 h-[360px] mr-5 justify-between'
          />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default TestimonialsSection;
