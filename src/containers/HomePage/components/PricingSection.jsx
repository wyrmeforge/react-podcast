import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Button from '../../../components/Button.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import { tcl } from '../../../utils/styles.js';
import Badge from '../../../components/Badge.jsx';

const rates = [
  {
    name: 'Member',
    description:
      'Unlock a world of exclusive content and community engagement. Enjoy a 5% discount on merch and livestreaming access.',
    price: '9.99',
    included: [
      'Exclusive Content',
      '5% Discount on Merch',
      'Join the Community',
      'Livestreaming Access',
    ],
  },
  {
    isTrending: true,
    name: 'Family',
    description:
      'Experience a premium tier with everything in Tier 1, plus free tickets to events, limited edition merch, the ability to promote your product.',
    price: '14.99',
    included: [
      'Everything in Tier 1',
      'Free Tickets to Events',
      'Limited Edition Merch',
      'Promote your Product',
      'Request Topic',
    ],
  },
  {
    name: 'Official',
    description:
      'Immerse yourself in the ultimate podcast experience with everything in Tier 2. Gain an exclusive badge on livestreaming, become an official sponsor.',
    price: '29.99',
    included: [
      'Everything in Tier 2',
      'Exclusive Badge on Livestreaming',
      'Become an Official Sponsor',
      'Early Access to All Episodes',
      'Free Stickers and Merch',
    ],
  },
];

const CardContainer = ({ className, isTrending, children }) => {
  const containerClassName = tcl(
    'w-[373px] h-[357px] rounded-8 border border-black text-left',
    { 'border-vermillion bg-champagne': isTrending },
    className,
  );

  return <div className={containerClassName}>{children}</div>;
};

const IncludedCard = ({ isTrending, included }) => (
  <CardContainer isTrending={isTrending} className='p-10 max-h-[312px]'>
    <p className='text-14 font-bold text-grey leading-160 mb-5'>What’s included:</p>
    <ul className='list-disc  marker:text-12 pl-2'>
      {included?.map((item, idx) => (
        <li className={tcl('mb-[10px]', { 'font-bold': idx === 0 })} key={idx}>
          {item}
        </li>
      ))}
    </ul>
  </CardContainer>
);

const PricingCard = ({ isTrending, name, description, price }) => (
  <CardContainer
    isTrending={isTrending}
    className='flex flex-col justify-between px-10 pt-15 pb-8 mb-5'
  >
    <div className='flex justify-between items-center'>
      <div className='font-bold leading-140 tracking-tighter text-37'>{name}</div>
      {isTrending && <Badge text='most popular' className='bg-vermillion !text-white' />}
    </div>
    <p className='text-grey text-14 font-medium leading-160 self-end'>{description}</p>
    <div className='flex justify-between items-center'>
      <Button xl>Subscribe</Button>
      <div className='flex flex-col font-bold'>
        <span className='text-vermillion tracking-tighter text-23 leading-140'>&#36;{price}</span>
        <span className='text-14 leading-160 text-grey'>/month</span>
      </div>
    </div>
  </CardContainer>
);

const PricingSection = ({ id }) => (
  <SectionContainer
    id={id}
    title='Become our sponsor'
    subtitle='Get exclusive episodes, merch and more'
  >
    <MaxWidthContainer customClassName='flex gap-5'>
      {rates?.map(({ name, description, price, included, isTrending = false }, idx) => (
        <div key={idx} className='flex flex-col items-center'>
          <PricingCard
            isTrending={isTrending}
            name={name}
            description={description}
            price={price}
          />
          <IncludedCard isTrending={isTrending} included={included} />
        </div>
      ))}
    </MaxWidthContainer>
  </SectionContainer>
);

export default PricingSection;
