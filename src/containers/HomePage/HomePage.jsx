import React, { useEffect } from 'react';

import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import ContentSection from './components/ContentSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import { useLocation } from 'react-router-dom';
import * as routePaths from '../../consts/router/routerPaths.js';
import { scrollToSection } from '../../utils/router.js';

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname) return;

    scrollToSection(pathname);
  }, [pathname]);

  useDocumentTitle('Home');

  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection id={routePaths.TESTIMONIALS} />
      <FeaturesSection id={routePaths.FEATURE} />
      <ContentSection id={routePaths.PODCAST_DETAILS} />
      <PricingSection id={routePaths.PRICING} />
      <BlogSection />
    </>
  );
};

export default HomePage;
