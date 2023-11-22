import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Button from '../../../components/Button.jsx';

import * as routePaths from '../../../consts/router/routerPaths.js';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Topic by Request',
    subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Exclusive Content',
    subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Join the Community',
    subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Livestreaming Access',
    subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Exclusive Episodes & Merch',
    subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
  },
  {
    title: 'And much more!',
    subtitle: 'Lorem ipsum dolor sit amet consectet pis\n' + 'cing elit, sed do eiusmod tempor.',
  },
];

const FeaturesSection = ({ id }) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(routePaths.PRICING, { replace: true });
  };

  return (
    <SectionContainer
      id={id}
      title='Membership benefits'
      subtitle='Become our sponsor and get all benefits'
    >
      <MaxWidthContainer customClassName='grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-20 mb-25'>
        {features?.map(({ icon, title, subtitle }, idx) => (
          <div key={idx} className='flex flex-col items-center max-w-[373px]'>
            <div className='mb-8'>{icon}</div>
            <div className='text-23 font-bold leading-140 tracking-tighter mb-[10px]'>{title}</div>
            <p className='font-medium text-16 leading-160'>{subtitle}</p>
          </div>
        ))}
      </MaxWidthContainer>
      <Button onClick={onButtonClick} className='mx-auto' xl>
        See pricing
      </Button>
    </SectionContainer>
  );
};

export default FeaturesSection;
