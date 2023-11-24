import React from 'react';
import Scribble from '../Icons/Scribble/Scribble.jsx';
import { tcl } from '../../utils/styles.js';

const SectionContainer = ({
  id,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  className,
  withScribble = true,
  children,
}) => {
  return (
    <section id={id} className={tcl('relative py-20 md:py-35 text-center', className)}>
      {title ? (
        <h2 className={tcl('mx-auto max-w-[85%] md:max-w-none w-max', titleClassName)}>{title}</h2>
      ) : null}
      {subtitle ? (
        <h3 className={tcl('mb-10 max-w-[80%] mx-auto md:max-w-none md:mb-25', subtitleClassName)}>
          {subtitle}
        </h3>
      ) : null}
      {children}
      {withScribble ? <Scribble /> : null}
    </section>
  );
};

export default SectionContainer;
