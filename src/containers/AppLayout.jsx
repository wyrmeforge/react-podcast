import React from 'react';
import Header from '../layout/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import CTASection from './CTASection.jsx';

const AppLayout = () => {
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
