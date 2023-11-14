import React from 'react';
import HeroContainer from '../../../components/Structure/HeroContainer.jsx';
import Button from '../../../components/Button.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';

const HeroSection = () => {
  return (
    <HeroContainer customClassName='pt-16 pb-35'>
      <MaxWidthContainer customClassName='flex flex-col items-center text-center'>
        <h1 className='mb-10'>
          About <br /> <span className='text-vermillion'>Pod of Cast</span>
        </h1>
        <p className='mb-15 max-w-[766px] text-grey text-16'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
        </p>
        <div className='flex mb-35'>
          <Button className='mr-5' bordered xl>
            BECOME SPONSOR
          </Button>
          <Button xl>Subscribe</Button>
        </div>
      </MaxWidthContainer>
    </HeroContainer>
  );
};

export default HeroSection;
