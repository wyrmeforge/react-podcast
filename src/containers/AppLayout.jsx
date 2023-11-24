import React, { useEffect, useState } from 'react';
import Header from '../layout/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import CTASection from './CTASection.jsx';
import { useScrollToTop } from '../hooks/useScrollToTop.js';
import podcastService from '../services/podcastsService/podcastService.js';
import { useDispatch } from 'react-redux';
import { setPodcasts } from '../store/podcast/podcastsSlice.js';
import Loader from '../components/Loader.jsx';
import reviewsService from '../services/reviewsService/reviewsService.js';
import { setReviews } from '../store/reviews/reviewsSlice.js';
import tagsService from '../services/tagsService/tagsService.js';
import { setTags } from '../store/tags/tagsSlice.js';
import useLayout from '../hooks/useIsMobile.js';

const AppLayout = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const dispatch = useDispatch();

  const initApp = async () => {
    const podcasts = await podcastService.getAllPodcasts();
    const reviews = await reviewsService.getAllReviews();
    const tags = await tagsService.getTags();

    dispatch(setPodcasts(podcasts?.data));
    dispatch(setReviews(reviews?.data));
    dispatch(setTags(tags?.data));

    setIsAppLoaded(!isAppLoaded);
  };

  useEffect(() => {
    initApp();
  }, []);

  useScrollToTop();
  useLayout();

  return (
    <ErrorBoundary>
      {isAppLoaded ? (
        <>
          <Header />
          <main>
            <Outlet />
            <CTASection />
          </main>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </ErrorBoundary>
  );
};

export default AppLayout;
