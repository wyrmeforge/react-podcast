import React from 'react';
import MaxWidthContainer from '../components/Structure/MaxWidthContainer.jsx';
import Button from '../components/Button.jsx';
import NavBar from '../components/NavBar.jsx';
import { useNavigate } from 'react-router-dom';
import * as routePaths from '../consts/router/routerPaths.js';

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
        <NavBar expanded />
        <div className='flex items-center'>
          <Button onClick={onRecentEpisodesClick} bordered className='mr-5 bg-champagne'>
            Recent episodes
          </Button>
          <Button onClick={onSubscribeClick}>Subscribe</Button>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
