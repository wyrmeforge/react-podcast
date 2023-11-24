import React from 'react';
import UserAvatar from './UserAvatar.jsx';
import useIsMobile from '../hooks/useIsMobile.js';

const UserCard = ({ avatarSrc, username, platformIcon }) => {
  const isMobile = useIsMobile();
  return (
    <div className='flex items-center text-14'>
      <UserAvatar imageUrl={avatarSrc} />
      <span className='font-medium mx-2'>{username},</span>
      {platformIcon && !isMobile && platformIcon}
    </div>
  );
};

export default UserCard;
