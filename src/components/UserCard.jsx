import React from 'react';
import Avatar from './Avatar';

const UserCard = ({ avatarSrc, username, jobIcon }) => (
  <div className='flex items-center text-14'>
    <Avatar imageUrl={avatarSrc} />
    <span className='font-medium mx-2'>{username},</span>
    {jobIcon && jobIcon}
  </div>
);

export default UserCard;
