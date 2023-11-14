import React from 'react';

import { tcl } from '../../utils/styles.js';

const MaxWidthContainer = ({ children, customClassName }) => {
  const containerClasses = tcl('max-w-content my-0 mx-auto relative', customClassName);

  return <div className={containerClasses}>{children}</div>;
};

export default MaxWidthContainer;
