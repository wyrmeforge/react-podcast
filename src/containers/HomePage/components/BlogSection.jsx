import React from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import im from '../../../assets/images/perplexed_mind.png';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import Button from '../../../components/Button.jsx';
import Tags from '../../../components/Tags.jsx';
import Divider from '../../../components/Divider.jsx';

const BlogItem = ({ category, title, description, tags, date }) => {
  return (
    <div className='w-[570px] rounded-8 border-2 bg-white border-black p-4 text-left group hover:cursor-pointer hover:drop-shadow-dark transition-all'>
      <img className='mb-10 h-[320px] w-full object-cover rounded-8' src={im} />
      <div className='text-14 font-bold text-grey leading-160 mb-[6px] uppercase '>{category}</div>
      <div className='text-37 leading-140 font-bold mb-5 group-hover:text-vermillion'>{title}</div>
      <div className='text-grey font-medium leading-160'>{description}</div>
      <Divider className='my-7 mb-5' />
      <div className='flex justify-between items-center'>
        <Tags tags={tags} />
        <div className='text-[12px] font-bold text-grey leading-160'>{date}</div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      category: 'Podcast',
      title: 'Setup your own podcast',
      tags: ['business', 'startup'],
      date: 'Sep 14, 2021',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
    },
    {
      category: 'TIPS & TRICK',
      title: 'Doodle artwork 101',
      tags: ['art', 'creative', 'tips and trick'],
      date: 'Sep 12, 2021',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
    },
  ];
  return (
    <SectionContainer
      className='bg-champagne'
      title='Article and News'
      subtitle='News, tips, tricks and more'
    >
      <MaxWidthContainer customClassName='flex gap-5 mb-25'>
        {blogs?.map((blog, idx) => (
          <BlogItem key={idx} {...blog} />
        ))}
      </MaxWidthContainer>
      <Button xl className='mx-auto'>
        Browse all
      </Button>
    </SectionContainer>
  );
};

export default BlogSection;
