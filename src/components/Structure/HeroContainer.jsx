import React from 'react';
import { StarsShapeIcon, SwirlIcon } from '../Icons/index.js';
import Scribble from '../Icons/Scribble.jsx';
import { tcl } from '../../utils/styles.js';

const HeroContainer = ({ children, customClassName, withScribble = true }) => (
  <section className={tcl('bg-champagne relative', customClassName)}>
    <SwirlIcon className='absolute left-0 top-[-30px]' />
    {children}
    <StarsShapeIcon className='absolute right-15 top-40' />
    {withScribble && <Scribble stroke='#CD4631' />}
  </section>
);

export default HeroContainer;
