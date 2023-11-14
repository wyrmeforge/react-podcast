import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Button from '../../../components/Button.jsx';
import {
  ShiningStars,
  ScribbleBlue,
  SmileFace,
  WormFace,
  Star_2,
  ScribbleWavyIcon,
} from '../../../components/Icons/index.js';
import Fire from '../../../components/Icons/Fire.jsx';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ScribbleBlue />,
      title: 'Topic by Request',
      subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
    },
    {
      icon: <ShiningStars />,
      title: 'Exclusive Content',
      subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
    },
    {
      icon: <SmileFace />,
      title: 'Join the Community',
      subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
    },
    {
      icon: <WormFace />,
      title: 'Livestreaming Access',
      subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
    },
    {
      icon: <Fire />,
      title: 'Exclusive Episodes & Merch',
      subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
    },
    {
      icon: <Star_2 />,
      title: 'And much more!',
      subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
    },
  ];

  return (
    <SectionContainer
      title='Membership benefits'
      subtitle='Become our sponsor and get all benefits'
      iconClassName='top-[-170px] right-30'
      iconPosition='right'
      titleIcon={<ScribbleWavyIcon />}
    >
      <MaxWidthContainer>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-20 mb-25'>
          {features?.map(({ icon, title, subtitle }, idx) => (
            <div key={idx} className='flex flex-col items-center max-w-[373px]'>
              <div className='mb-8'>{icon}</div>
              <div className='text-23 font-bold leading-140 tracking-tighter mb-[10px]'>
                {title}
              </div>
              <p className='font-medium text-16 leading-160'>{subtitle}</p>
            </div>
          ))}
        </div>
        <Button className='mx-auto' xl>
          See pricing
        </Button>
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default FeaturesSection;
