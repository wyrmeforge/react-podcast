import React from 'react';
import MaxWidthContainer from '../components/Structure/MaxWidthContainer.jsx';
import Button from '../components/Button.jsx';
import NavBar from '../components/NavBar.jsx';
import routerService from '../services/routerService.js';
import useIsMobile from '../hooks/useIsMobile.js';

const Header = () => {
  const onRecentEpisodesClick = () => routerService.toRecentEpisodesSection();
  const onSubscribeClick = () => routerService.toPricingSection();

  const isMobile = useIsMobile();

  return (
    <header className='bg-champagne py-6'>
      <MaxWidthContainer customClassName='flex items-center justify-between'>
        <NavBar />
        {!isMobile ? (
          <div className='flex w-full items-center justify-end'>
            <Button onClick={onRecentEpisodesClick} bordered className='mr-5 bg-champagne'>
              Recent episodes
            </Button>
            <Button onClick={onSubscribeClick}>Subscribe</Button>
          </div>
        ) : null}
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
