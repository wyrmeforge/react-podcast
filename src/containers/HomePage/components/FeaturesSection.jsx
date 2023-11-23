import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Button from '../../../components/Button.jsx';
import routerService from '../../../services/routerService.js';
import {
  FaceIcon,
  FeatureScribbleIcon,
  FeatureStarIcon,
  FireIcon,
  ShiningStarsIcon,
  SmileIcon,
} from '../../../components/Icons/index.js';

const features = [
  {
    icon: <FeatureScribbleIcon />,
    title: 'Topic by Request',
    subtitle: 'Unlock personalized discussions tailored to your interests and questions.',
  },
  {
    icon: <ShiningStarsIcon />,
    title: 'Exclusive Content',
    subtitle: 'Immerse yourself in premium content crafted with care and exclusivity.',
  },
  {
    icon: <SmileIcon />,
    title: 'Join the Community',
    subtitle: 'Connect with like-minded individuals and be part of a thriving podcast community.',
  },
  {
    icon: <FaceIcon />,
    title: 'Livestreaming Access',
    subtitle: 'Experience real-time engagement with our hosts through exclusive livestream events.',
  },
  {
    icon: <FireIcon />,
    title: 'Exclusive Episodes & Merch',
    subtitle: 'Indulge in members-only episodes and grab unique podcast merchandise.',
  },
  {
    icon: <FeatureStarIcon />,
    title: 'And much more!',
    subtitle: 'Discover a plethora of surprises and extras to enhance your podcast experience.',
  },
];

const FeaturesSection = ({ id }) => {
  const onButtonClick = () => routerService.toPricingSection();

  return (
    <SectionContainer
      id={id}
      title='Membership benefits'
      subtitle='Become our sponsor and get all benefits'
    >
      <MaxWidthContainer customClassName='grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-20 mb-25'>
        {features?.map(({ icon, title, subtitle }, idx) => (
          <div key={idx} className='flex flex-col items-center max-w-[373px]'>
            {icon}
            <div className='text-23 font-bold leading-140 tracking-tighter mt-8 mb-[10px]'>
              {title}
            </div>
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
