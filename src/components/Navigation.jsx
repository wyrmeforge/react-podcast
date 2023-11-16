import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, LogoIcon } from './Icons/index.js';
import { tcl } from '../utils/styles.js';
import Dropdown from './Dropdown.jsx';
import * as routePaths from '../consts/router/routerPaths.js';

const NavLink = ({ onClick, isVisible = true, to, element, customClassName }) => {
  if (!isVisible) return;

  return (
    <Link
      className={tcl('hover:cursor-pointer hover:text-vermillion mr-5 last:mr-0', customClassName)}
      onClick={onClick}
      to={to}
    >
      {element}
    </Link>
  );
};

const NavContent = ({ navLinks, expanded }) => {
  const visibleLinks = expanded ? navLinks.slice(0, 3) : navLinks;

  const renderNavLink = (link, idx) => (
    <NavLink
      isVisible={link.isVisible}
      key={idx}
      to={link.to}
      element={link.element}
      customClassName={link.className}
    />
  );

  return (
    <>
      {visibleLinks.map(renderNavLink)}
      {expanded && (
        <Dropdown
          menuClassName='bg-champagne p-3 rounded-4 border drop-shadow-hoverXlRed mt-2'
          trigger={
            <div className='flex items-center hover:cursor-pointer'>
              <span className='mr-[6px]'>More</span> <ArrowDownIcon />
            </div>
          }
          menu={navLinks.slice(3).map(renderNavLink)}
        />
      )}
    </>
  );
};

const Navigation = ({ expanded = false, className }) => {
  const navLinks = [
    { to: '/', element: <LogoIcon />, className: 'mr-[123px]', isVisible: expanded },
    { to: routePaths.PODCAST_DETAILS, element: 'Episodes' },
    { to: routePaths.ABOUT_PAGE, element: 'About' },
    { to: routePaths.PRICING, element: 'Pricing' },
    { to: routePaths.TESTIMONIALS, element: 'Testimonials' },
    { to: routePaths.FEATURE, element: 'Features' },
    { to: routePaths.BLOG_PAGE, element: 'Blog' },
  ];

  return (
    <nav className={tcl('flex font-bold items-center', className)}>
      <NavContent navLinks={navLinks} expanded={expanded} />
    </nav>
  );
};

export default Navigation;
