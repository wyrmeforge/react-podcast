import React from 'react';
import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import CTASection from './CTASection.jsx';
import { useScrollToTop } from '../hooks/useScrollToTop.js';

const AppLayout = () => {
  useScrollToTop();

  return (
    <ErrorBoundary>
      <Header />
      <main>
        <Outlet />
        <CTASection />
      </main>
      <Footer />
    </ErrorBoundary>
  );
};

export default AppLayout;
