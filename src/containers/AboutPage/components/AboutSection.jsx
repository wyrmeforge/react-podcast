import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Image from '../../../components/Image.jsx';
import bg from '../../../assets/images/about_section_micro_bg.jpg';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Divider from '../../../components/Divider.jsx';
import host1Image from '../../../assets/images/host_1.jpg';
import host2Image from '../../../assets/images/host_2.jpg';

const HostInfoBlock = ({ imageSrc, name, description, number }) => (
  <div className='w-[570px] h-[520px] bg-white rounded-8 border-2 p-4 flex justify-between drop-shadow-dark'>
    <Image className='rounded-8' src={imageSrc} alt={name} />
    <div className='flex flex-col justify-end font-medium text-14 leading-160 text-left ml-5'>
      <div className='mb-[6px] text-black'>{`Host ${number}`}</div>
      <div className='font-bold text-37 leading-none tracking-tighter mb-5'>{name}</div>
      <p className='text-grey'>{description}</p>
      <Divider className='mt-5 mb-[10px]' />
      <div>Follow me:</div>
    </div>
  </div>
);

const AboutSection = () => (
  <SectionContainer
    title='What Our Listeners Say'
    subtitle='Their Experience Throughout Every Platform'
    subtitleClassName='mb-8'
  >
    <MaxWidthContainer>
      <Image className='mb-15' src={bg} />
      <h3 className='font-bold text-37 leading-140 text-black tracking-tighter mb-20'>
        About and History
      </h3>
      <div className='flex justify-between text-left text-grey text-16 font-medium leading-160 mb-20'>
        <p className='mr-5 w-[570px]'>
          Eu non <b>diam</b> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim. Id diam vel quam <b>elementum pulvinar.</b> <br /> <br />
          Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi quis commodo odio
          aenean sed adipiscing odio diam. uno fablotoson louw uit.
        </p>
        <p className='w-[570px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum
          euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus
          iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante
          enim eget. <br /> <br /> Viverra at porttitor accumsan. Orci non here
        </p>
      </div>
      <Divider className='mb-25' />
      <h3 className='font-bold text-37 leading-140 text-black tracking-tighter mb-20'>
        Founder and Main Host
      </h3>
      <div className='flex justify-between'>
        <HostInfoBlock
          imageSrc={host1Image}
          name='Porter Severus'
          description='Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.'
          number={1}
        />
        <HostInfoBlock
          imageSrc={host2Image}
          name='Marques Keith'
          description='Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.'
          number={2}
        />
      </div>
    </MaxWidthContainer>
  </SectionContainer>
);

export default AboutSection;
