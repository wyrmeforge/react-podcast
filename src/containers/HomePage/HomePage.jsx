import React from 'react';

import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import ContentSection from './components/ContentSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

const HomePage = () => {
  useDocumentTitle('Home');

  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <FeaturesSection />
      <ContentSection />
      <PricingSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
