import React from 'react';
import UserAvatar from './UserAvatar.jsx';

const UserCard = ({ avatarSrc, username, jobIcon }) => (
  <div className='flex items-center text-14'>
    <UserAvatar imageUrl={avatarSrc} />
    <span className='font-medium mx-2'>{username},</span>
    {jobIcon && jobIcon}
  </div>
);

export default UserCard;
