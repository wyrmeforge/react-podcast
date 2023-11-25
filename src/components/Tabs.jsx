import React from 'react';
import { tcl } from '../utils/styles.js';
import Divider from './Divider.jsx';
import useIsMobile from '../hooks/useIsMobile.js';
import Carousel from './Carousel/Carousel.jsx';

const Tab = ({ label, active, onClick }) => (
  <div
    className={tcl('hover:cursor-pointer mr-10 md:mr-0 text-23 text-grey pb-5', {
      'text-vermillion font-bold': active,
    })}
    onClick={onClick}
  >
    {label}
  </div>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const isMobile = useIsMobile();

  // ToDo: update carousel component to correct work with tabs
  return (
    <>
      <div className='flex justify-between'>
        {isMobile ? (
          <Carousel>
            {tabs.map(({ label, id }) => (
              <Tab
                key={id}
                label={label}
                active={id === activeTab}
                onClick={() => setActiveTab(id)}
              />
            ))}
          </Carousel>
        ) : (
          tabs.map(({ label, id }) => (
            <Tab
              key={id}
              label={label}
              active={id === activeTab}
              onClick={() => setActiveTab(id)}
            />
          ))
        )}
      </div>
      <Divider className='mb-10 md:mb-25' />
      {tabs.map(({ id, content }) => (
        <div key={id} className={`${activeTab === id ? 'block' : 'hidden'}`}>
          {content}
        </div>
      ))}
    </>
  );
};

export default Tabs;
