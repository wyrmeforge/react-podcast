import React from 'react';
import MaxWidthContainer from '../components/Structure/MaxWidthContainer.jsx';

const Footer = () => {
  return (
    <footer className='w-full border-t-[1.5px] border-t-grey bg-white pt-[140px] pb-[80px]'>
      <MaxWidthContainer>
        <div className='border-t-[.5px] border-t-grey pt-5 font-medium text-12 flex justify-between'>
          <div>
            &#64;2022. All Rights Reserved. <span className='text-vermillion'>Pod of Cast</span>
          </div>
          <div>Terms • Privacy</div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
