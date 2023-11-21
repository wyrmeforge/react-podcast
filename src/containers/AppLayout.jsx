import React, { useEffect, useState } from 'react';
import Header from '../components/Structure/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Structure/Footer.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import CTASection from './CTASection.jsx';
import { useScrollToTop } from '../hooks/useScrollToTop.js';
import podcastService from '../services/podcastsService/podcastService.js';
import { useDispatch } from 'react-redux';
import { setPodcasts } from '../store/podcast/podcastsSlice.js';
import Loader from '../components/Loader.jsx';

const AppLayout = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const dispatch = useDispatch();

  const initApp = async () => {
    const { data } = await podcastService.getAllPodcasts();

    if (data) {
      dispatch(setPodcasts(data));
    }

    setIsAppLoaded(!isAppLoaded);
  };

  useEffect(() => {
    initApp();
  }, []);

  useScrollToTop();

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
