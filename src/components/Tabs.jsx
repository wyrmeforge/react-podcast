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
        {tabs.map(({ label, id }) => (
          <Tab key={id} label={label} active={id === activeTab} onClick={() => setActiveTab(id)} />
        ))}
      </div>
      <Divider className='mb-25' />
      {tabs.map(({ id, content }) => (
        <div key={id} className={`${activeTab === id ? 'block' : 'hidden'}`}>
          {content}
        </div>
      ))}
    </>
  );
};

export default Tabs;
