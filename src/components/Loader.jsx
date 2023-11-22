import React from 'react';
import { tcl } from '../utils/styles.js';

const Loader = ({ className }) => {
  const containerClasses = tcl(
    'flex space-x-2 justify-center items-center bg-white h-screen',
    className,
  );

  const defaultClasses = 'h-8 w-8 bg-vermillion rounded-full animate-bounce';

  return (
    <div className={containerClasses}>
      <div className={`${defaultClasses} [animation-delay:-0.3s]`}></div>
      <div className={`${defaultClasses} [animation-delay:-0.15s]`}></div>
      <div className={defaultClasses}></div>
    </div>
  );
};

export default Loader;
