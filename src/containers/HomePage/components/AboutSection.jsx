import React from 'react';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Image from '../../../components/Image.jsx';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Quote from '../../../components/Quote.jsx';
import questionsImage from '../../../assets/images/illustration_questions.png';
import ideaImage from '../../../assets/images/illustration_idea.png';
import { SpotifyWhite } from '../../../components/Icons/index.js';

const InfoItem = ({ image, text }) => (
  <div className='flex flex-col justify-center items-center'>
    <Image src={image} alt={text} width='auto' height='auto' />
    <div className='max-w-[472px] mt-10'>{text}</div>
  </div>
);

const AboutSection = () => {
  return (
    <SectionContainer
      titleClassName='mb-25 max-w-[735px]'
      title='Talk. Listen. Get inspired by every minute of it.'
    >
      <MaxWidthContainer>
        <div className='flex justify-between mb-30'>
          <InfoItem
            image={questionsImage}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
          />
          <InfoItem
            image={ideaImage}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.'
          />
        </div>
        <Quote
          showDecorations
          text='One of the best daily podcasts that covers every topic on Spotify.'
          username='John Smith,'
          jobIcon={<SpotifyWhite fill='#1ED760' />}
          jobTitle='Social Community Manager'
        />
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default AboutSection;
