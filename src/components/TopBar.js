import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <header className="topbar">
      <h1>Knowledge Center</h1>
      <nav aria-label="Content Navigation">
        <ul>
          <li className="active" aria-current="page">Topics & Training</li>
          <li>Resources</li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;