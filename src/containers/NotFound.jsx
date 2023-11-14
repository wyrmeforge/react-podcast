import React from 'react';
import Button from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen h-full flex flex-col justify-center items-center'>
      Oops, Sorry no such page exists
      <Button onClick={() => navigate(-1)} className='mt-[15px]' bordered>
        Go back
      </Button>
    </div>
  );
};

export default NotFound;
