import React from 'react';
import { QuoteIcon } from './Icons/index.js';
import UserCard from './UserCard.jsx';
import { tcl } from '../utils/styles.js';

const Quote = ({ className, textClassName, text, avatarSrc, username, jobIcon }) => (
  <div
    className={tcl('bg-champagne rounded-12 py-10 flex flex-col items-center relative', className)}
  >
    <QuoteIcon />
    <div className={tcl('text-37 leading-140 font-bold max-w-[758px] mx-auto p-10', textClassName)}>
      {text}
    </div>
    <UserCard avatarSrc={avatarSrc} username={username} jobIcon={jobIcon} />
  </div>
);

export default Quote;
