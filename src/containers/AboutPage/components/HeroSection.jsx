import React from 'react';
import HeroContainer from '../../../components/Structure/HeroContainer.jsx';
import Button from '../../../components/Button.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';

const InfoBlock = ({ count, text }) => {
  return (
    <div className='w-[373px] h-[235px] rounded-8 border-[1.5px] flex flex-col justify-center items-center mr-5 bg-white drop-shadow-hoverXlRed transition-all'>
      <div className='text-60 leading-120 tracking-tighter font-bold text-vermillion mb-5'>
        {count}
        <span className='text-black uppercase'>k</span>
      </div>
      <div className='text-grey'>{text}</div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <HeroContainer customClassName='pt-16 pb-[116px]'>
      <MaxWidthContainer customClassName='flex flex-col items-center text-center relative overflow-visible'>
        <h1 className='mb-10'>
          About <br /> <span className='text-vermillion'>Pod of Cast</span>
        </h1>
        <p className='mb-15 max-w-[766px] text-grey text-16'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
        </p>
        <div className='flex pb-35'>
          <Button className='mr-5 bg-champagne px-9' bordered xl>
            BECOME SPONSOR
          </Button>
          <Button xl>Subscribe</Button>
        </div>
        <div className='flex items-center absolute bottom-[-43%] z-30'>
          <InfoBlock count={76} text='Community Members' />
          <InfoBlock count={123} text='Podcast Subscribers' />
          <InfoBlock count={39} text='Daily Listeners' />
        </div>
      </MaxWidthContainer>
    </HeroContainer>
  );
};

export default HeroSection;
