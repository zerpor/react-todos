import React from 'react';
import logo from '../assets/logo.svg';
import './PageHeader.css';

function PageHeader({ userInfo }) {
  return (
    <header className="header">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div>{userInfo.username}</div>
    </header>
  );
}

export default PageHeader;
