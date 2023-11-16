import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SponsorSection from './components/SponsorSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

const AboutPage = () => {
  useDocumentTitle('About');

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SponsorSection />
      <ContactSection />
    </>
  );
};

export default AboutPage;
