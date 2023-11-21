import React from 'react';
import { tcl } from '../utils/styles.js';
import Divider from './Divider.jsx';

const Tab = ({ label, active, onClick }) => (
  <div
    className={tcl('hover:cursor-pointer text-23 font-medium text-grey leading-160 pb-5', {
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
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            active={tab.label === activeTab}
            onClick={() => setActiveTab(tab.label)}
          />
        ))}
      </div>
      <Divider className='mb-25' />
      {tabs.map((tab, index) => (
        <div key={index} className={`${activeTab === tab.label ? 'block' : 'hidden'}`}>
          {tab.content}
        </div>
      ))}
    </>
  );
};

export default Tabs;
