import React from 'react';
import Scribble from '../Icons/Scribble.jsx';
import { tcl } from '../../utils/styles.js';
import SectionTitle from '../SectionTitle.jsx';

const SectionContainer = ({
  title,
  titleWithIcon,
  id,
  titleClassName,
  subtitle,
  subtitleClassName,
  className,
  withScribble = true,
  children,
}) => {
  const sectionClasses = tcl('relative py-35 text-center', className);
  const titleClasses = tcl('mx-auto w-max', titleClassName);

  return (
    <section id={id} className={sectionClasses}>
      <SectionTitle withIcon={titleWithIcon} text={title} className={titleClasses} />
      {subtitle && <h3 className={tcl('mb-25', subtitleClassName)}>{subtitle}</h3>}
      {children}
      {withScribble && <Scribble />}
    </section>
  );
};

export default SectionContainer;
