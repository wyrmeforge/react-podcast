import React from 'react';

import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import ContentSection from './components/ContentSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import * as routePaths from '../../consts/routerPaths.js';
import useScrollToSection from '../../hooks/useScrollToSection.js';

const HomePage = () => {
  useScrollToSection();
  useDocumentTitle('Home');

  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection id={routePaths.TESTIMONIALS} />
      <FeaturesSection id={routePaths.FEATURE} />
      <ContentSection id={routePaths.RECENT_EPISODES} />
      <PricingSection id={routePaths.PRICING} />
    </>
  );
};

export default HomePage;
