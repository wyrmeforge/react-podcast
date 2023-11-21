import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import scrollToSection from '../utils/navigation.js';

const useScrollToSection = () => {
  const { pathname, key } = useLocation();

  useEffect(() => {
    if (!pathname) return;

    scrollToSection(pathname);
  }, [pathname, key]);
};

export default useScrollToSection;
