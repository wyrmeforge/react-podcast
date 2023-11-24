import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, LogoIcon } from './Icons/index.js';
import { tcl } from '../utils/styles.js';
import Dropdown from './Dropdown.jsx';
import * as routePaths from '../consts/routerPaths.js';
import useIsMobile from '../hooks/useIsMobile.js';
import BurgerMenu from './BurgerMenu.jsx';

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
  const [isMenuVisible, setMenuVisible] = useState(false);
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

  const isMobile = useIsMobile();

  const menuClasses = tcl(
    {
      'fixed left-0 top-0 bg-white pl-10 pt-20 w-full h-full z-30': isMobile,
      open: isMenuVisible,
    },
    {
      'bg-champagne p-3 rounded-4 border-2 border-[rgba(0,0,0,.25)] drop-shadow-hover mt-2':
        !isMobile,
    },
  );

  return (
    <>
      {isMobile ? <NavLink to='/' element={<LogoIcon />} /> : visibleLinks.map(renderNavLink)}
      {(expanded || isMobile) && (
        <Dropdown
          listItemClassName={tcl({ 'mb-8 text-37': isMobile })}
          menuClassName={menuClasses}
          handleIsOpen={setMenuVisible}
          trigger={
            isMobile ? (
              <BurgerMenu isOpen={isMenuVisible} />
            ) : (
              <div className='flex items-center hover:cursor-pointer'>
                <span className='mr-[6px]'>More</span> <ArrowDownIcon />
              </div>
            )
          }
          menu={navLinks.slice(isMobile ? 1 : 3).map(renderNavLink)}
        />
      )}
    </>
  );
};

const NavBar = ({ expanded = false, className }) => {
  const navLinks = [
    { to: '/', element: <LogoIcon />, className: 'mr-[123px]', isVisible: expanded },
    { to: routePaths.EPISODES, element: 'Episodes' },
    { to: routePaths.ABOUT_PAGE, element: 'About' },
    { to: routePaths.PRICING, element: 'Pricing' },
    { to: routePaths.TESTIMONIALS, element: 'Testimonials' },
    { to: routePaths.FEATURE, element: 'Features' },
    { to: routePaths.BLOG_PAGE, element: 'Blog' },
  ];

  return (
    <nav
      className={tcl(
        'flex justify-between w-full md:justify-normal font-bold items-center',
        className,
      )}
    >
      <NavContent navLinks={navLinks} expanded={expanded} />
    </nav>
  );
};

export default NavBar;
