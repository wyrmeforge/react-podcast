import React from 'react';
import MaxWidthContainer from '../components/Structure/MaxWidthContainer.jsx';
import Button from '../components/Button.jsx';
import Navigation from '../components/Navigation.jsx';

const Header = () => (
  <header className='bg-champagne pt-6'>
    <MaxWidthContainer customClassName='flex items-center justify-between'>
      <Navigation customClassName='mr-[123px]' />
      <div className='flex items-center'>
        <Button bordered className='uppercase font-bold mr-5'>
          RECENT EPISODES
        </Button>
        <Button className='uppercase font-bold'>SUBSCRIBE</Button>
      </div>
    </MaxWidthContainer>
  </header>
);

export default Header;
