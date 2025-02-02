import React from 'react';
import '../css/Sidebar.css';
import IdDisplay from './IdDisplay';

function Sidebar() {
  return (
    <div id='sidebar'>
      <IdDisplay id='user-id' />
      <img src='../../favicon.ico' alt='placeholder' />
    </div>
  );
}

export default Sidebar;
