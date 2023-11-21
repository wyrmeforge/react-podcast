import React from 'react';
import MaxWidthContainer from './MaxWidthContainer.jsx';
import Button from '../Button.jsx';
import Navigation from '../Navigation.jsx';
import { useNavigate } from 'react-router-dom';
import * as routePaths from '../../consts/router/routerPaths.js';

const Header = () => {
  const navigate = useNavigate();

  const onRecentEpisodesClick = () => {
    navigate(routePaths.RECENT_EPISODES, { replace: true });
  };

  const onSubscribeClick = () => {
    navigate(routePaths.PRICING, { replace: true });
  };

  return (
    <header className='bg-champagne py-6'>
      <MaxWidthContainer customClassName='flex items-center justify-between'>
        <Navigation expanded />
        <div className='flex items-center'>
          <Button onClick={onRecentEpisodesClick} bordered className='font-bold mr-5 bg-champagne'>
            Recent episodes
          </Button>
          <Button onClick={onSubscribeClick} className='font-bold'>
            Subscribe
          </Button>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
