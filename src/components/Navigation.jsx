import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './Icons/index.js';
import { tcl } from '../utils/styles.js';

const NavLink = ({ onClick, to, element, customClassName }) => (
  <Link
    className={tcl('hover:cursor-pointer hover:text-vermillion mr-5 last:mr-0', customClassName)}
    onClick={onClick}
    to={to}
  >
    {element}
  </Link>
);

const Navigation = ({ customClassName }) => {
  return (
    <nav className='flex font-bold items-center'>
      <NavLink to='/' element={<LogoIcon />} customClassName={customClassName} />
      <NavLink to='episodes' element='Episodes' />
      <NavLink to='about' element='About' />
      <NavLink element='Testimonials' />
    </nav>
  );
};

export default Navigation;
