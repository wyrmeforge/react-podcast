import React from 'react';

const Icon = ({ width, height, className, children }) => {
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {children}
    </svg>
  );
};

export default Icon;
