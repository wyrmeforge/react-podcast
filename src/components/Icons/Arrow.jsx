import React from 'react';
import Icon from './Icon.jsx';

const Arrow = ({ className }) => (
  <Icon width='40' height='40' className={className}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 38.4996C30.216 38.4996 38.5 30.2176 38.5 19.9996C38.5 9.78363 30.216 1.49963 20 1.49963C9.784 1.49963 1.5 9.78363 1.5 19.9996C1.5 30.2176 9.784 38.4996 20 38.4996Z'
      stroke='#000'
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.1153 26.942L24.0873 20L17.1153 13.058'
      stroke='#000'
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export default Arrow;
