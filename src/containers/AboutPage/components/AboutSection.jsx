import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Image from '../../../components/Image.jsx';
import bg from '../../../assets/images/about_section_micro_bg.jpg';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Divider from '../../../components/Divider.jsx';
import porterSeverusImage from '../../../assets/images/host_1.jpg';
import marquesKeithImage from '../../../assets/images/host_2.jpg';
import { InstagramIcon, TikTokIcon, TwitterIcon } from '../../../components/Icons/index.js';

const HostInfo = ({ image, name, text, number }) => (
  <div className=' md:w-[570px] mb-10 last:mb-0 h-[520px] bg-white rounded-8 border-2 p-4 flex flex-col md:flex-row justify-between drop-shadow-dark'>
    <Image className='rounded-8 max-h-[50%] object-cover mb-5 md:mb-0' src={image} alt={name} />
    <div className='flex flex-col justify-end font-medium text-14 leading-160 text-left ml-5'>
      <div className='mb-[6px] text-black'>Host {number}</div>
      <div className='font-bold text-30 md:text-37 leading-none tracking-tighter mb-5'>{name}</div>
      <p className='text-grey text-12 md:text-16'>{text}</p>
      <Divider className='mt-5 mb-[10px]' />
      <div className='flex justify-end'>
        <div className='text-12 text-grey font-bold mr-5'>follow me:</div>
        <div className='max-w-[80px] w-full flex justify-between'>
          <TikTokIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  const hostsInfo = [
    {
      name: 'Porter Severus',
      text: 'Meet Porter Severus, the visionary founder of Pod of Cast. With a passion for storytelling, Porter leads engaging and thought-provoking conversations that take you on a journey of discovery.',
      image: porterSeverusImage,
    },
    {
      name: 'Marques Keith',
      text: 'Introducing Marques Keith, the charismatic co-host of Pod of Cast. Marques brings infectious energy and diverse perspectives to every episode, making each discussion a dynamic and enlightening experience.',
      image: marquesKeithImage,
    },
  ];
  return (
    <SectionContainer
      title='What Our Listeners Say'
      subtitle='Their Experience Throughout Every Platform'
      subtitleClassName='md:mb-8'
    >
      <MaxWidthContainer>
        <Image className='mb-15' src={bg} alt='microphone background' />
        <h3 className='font-bold text-37 leading-140 text-black tracking-tighter mb-10 md:mb-20'>
          About and History
        </h3>
        <div className='text-left text-14 md:text-16 text-grey mb-10 md:mb-20 columns-2 gap-5'>
          <p>
            Embark on a thrilling adventure with Pod of Cast, where every episode unfolds a unique
            story. Our mission is to captivate your imagination, fostering a vibrant community of
            avid listeners. Join us as we explore fascinating topics and share in the joy of
            discovery.
          </p>
          <p>
            At the heart of Pod of Cast is a commitment to providing an enriching experience.
            Immerse yourself in thought-provoking discussions, intriguing stories, and expert
            insights. Discover a world of possibilities and be part of a community that values
            curiosity, diversity, and the shared love of great conversations.
          </p>
        </div>
        <Divider className='mb-15 md:mb-25' />
        <h3 className='font-bold text-37 leading-140 text-black tracking-tighter mb-20'>
          Founder and Main Host
        </h3>
        <div className='flex flex-col md:flex-row justify-between'>
          {hostsInfo?.map((item, idx) => (
            <HostInfo key={idx} number={idx + 1} {...item} />
          ))}
        </div>
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default AboutSection;
