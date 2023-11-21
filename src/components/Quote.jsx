import React from 'react';
import { DNAIcon, QuoteIcon, StarIcon } from './Icons/index.js';
import UserCard from './UserCard.jsx';
import { tcl } from '../utils/styles.js';

const Quote = ({
  className,
  textClassName,
  showDecorations = false,
  text,
  avatarSrc,
  username,
  jobIcon,
}) => {
  const containerClasses = tcl(
    'bg-champagne rounded-12 py-10 flex flex-col items-center relative',
    className,
  );

  const textClasses = tcl(
    'text-37 leading-140 font-bold max-w-[758px] mx-auto p-10',
    textClassName,
  );

  return (
    <div className={containerClasses}>
      {showDecorations && <StarIcon className='absolute top-[-54px] right-[-48px]' />}
      <QuoteIcon />
      <div className={textClasses}>{text}</div>
      <UserCard avatarSrc={avatarSrc} username={username} jobIcon={jobIcon} />
      {showDecorations && <DNAIcon className='absolute left-[-60px] bottom-[40px]' />}
    </div>
  );
};

export default Quote;
