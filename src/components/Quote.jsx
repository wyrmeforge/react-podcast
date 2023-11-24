import React from 'react';
import { QuoteIcon } from './Icons/index.js';
import UserCard from './UserCard.jsx';
import { tcl } from '../utils/styles.js';

const Quote = ({ className, textClassName, text, avatarSrc, username, platformIcon }) => (
  <div
    className={tcl(
      'bg-champagne rounded-12 p-5 md:py-10 flex flex-col items-center relative',
      className,
    )}
  >
    <QuoteIcon />
    <div
      className={tcl(
        'text-23 py-5 md:text-37 leading-140 font-bold max-w-[758px] mx-auto md:py-10',
        textClassName,
      )}
    >
      {text}
    </div>
    <UserCard avatarSrc={avatarSrc} username={username} platformIcon={platformIcon} />
  </div>
);

export default Quote;
