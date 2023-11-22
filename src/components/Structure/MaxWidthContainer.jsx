import React from 'react';

import { tcl } from '../../utils/styles.js';

const MaxWidthContainer = ({ children, customClassName }) => (
  <div className={tcl('max-w-content my-0 mx-auto relative', customClassName)}>{children}</div>
);

export default MaxWidthContainer;
