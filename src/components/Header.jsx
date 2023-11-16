import React from 'react';
import MaxWidthContainer from './Structure/MaxWidthContainer.jsx';
import Button from './Button.jsx';
import Navigation from './Navigation.jsx';

const Header = () => {
  return (
    <header className='bg-champagne pt-6'>
      <MaxWidthContainer customClassName='flex items-center justify-between'>
        <Navigation expanded />
        <div className='flex items-center'>
          <Button bordered className='font-bold mr-5 bg-champagne'>
            Recent episodes
          </Button>
          <Button className='font-bold'>SUBSCRIBE</Button>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
