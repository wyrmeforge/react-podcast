import React from 'react';
import { tcl } from '../utils/styles.js';
import Divider from './Divider.jsx';

const Tab = ({ label, active, onClick }) => (
  <div
    className={tcl('hover:cursor-pointer text-23 text-grey pb-5', {
      'text-vermillion font-bold': active,
    })}
    onClick={onClick}
  >
    {label}
  </div>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <>
      <div className='flex justify-between'>
        {tabs.map(({ label }, index) => (
          <Tab
            key={index}
            label={label}
            active={label === activeTab}
            onClick={() => setActiveTab(label)}
          />
        ))}
      </div>
      <Divider className='mb-25' />
      {tabs.map(({ label, content }, index) => (
        <div key={index} className={`${activeTab === label ? 'block' : 'hidden'}`}>
          {content}
        </div>
      ))}
    </>
  );
};

export default Tabs;
