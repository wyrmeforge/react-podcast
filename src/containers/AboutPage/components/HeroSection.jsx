import React from 'react';
import Button from '../../../components/Button.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';

const HeroSection = () => {
  const appInfo = [
    {
      text: 'Community Members',
      count: 76,
    },
    {
      text: 'Podcast Subscribers',
      count: 143,
    },
    {
      text: 'Daily Listeners',
      count: 2,
    },
  ];

  return (
    <SectionContainer className='md:pt-16 md:pb-[116px] bg-champagne'>
      <MaxWidthContainer customClassName='flex flex-col items-center text-center relative overflow-visible'>
        <h1 className='mb-10'>
          About <br /> <span className='text-vermillion'>Pod of Cast</span>
        </h1>
        <p className='mb-15 max-w-[766px] text-grey text-16'>
          Welcome to Pod of Cast, where we explore the fascinating world of podcasts. Join us on a
          journey of discovery as we delve into diverse topics and conversations.
        </p>
        <div className='flex pb-15 md:pb-35'>
          <Button className='mr-5 bg-champagne px-9' bordered xl>
            Become sponsor
          </Button>
          <Button xl>Subscribe</Button>
        </div>
        <div className='flex items-center md:absolute md:bottom-[-20%] md:bottom-[-42%] md:z-30'>
          {appInfo?.map(({ text, count }, idx) => (
            <div
              key={idx}
              className='w-[40%] h-[140px] md:w-[373px] md:h-[235px] rounded-8 border-2 flex flex-col justify-center items-center mr-5 bg-white drop-shadow-hoverXlRed transition-all last:mr-0'
            >
              <div className='text-30 md:text-60 leading-120 tracking-tighter font-bold text-vermillion mb-5'>
                {count}
                <span className='text-black uppercase'>k</span>
              </div>
              <div className='text-14 md:text-16 text-grey'>{text}</div>
            </div>
          ))}
        </div>
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default HeroSection;
