import React from 'react';
import Avatar from './Avatar';

const UserCard = ({ avatarSrc, username, jobIcon, jobTitle }) => {
  return (
    <div className='flex items-center text-14'>
      <Avatar src={avatarSrc} />
      <span className='font-medium mx-2'>{username}</span>
      {jobIcon && jobIcon}
      {jobTitle && <span className='font-bold ml-2'>{jobTitle}</span>}
    </div>
  );
};

export default UserCard;
