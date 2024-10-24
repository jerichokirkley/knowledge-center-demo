import React, { useState } from 'react';
import './Sidebar.css';
import NavItem from './NavItem';
import { FaHome, FaUserAlt, FaFileAlt, FaCashRegister, FaBook, FaCog, FaSignOutAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { icon: FaHome, label: 'Dashboard' },
    { icon: FaUserAlt, label: 'Customer Lookup' },
    { icon: FaFileAlt, label: 'Back Office' },
    { icon: FaCashRegister, label: 'Checkout' },
    { icon: FaBook, label: 'Knowledge Center' },
    { icon: FaCog, label: 'Settings' },
  ];

  return (
    <nav className="sidebar" aria-label="Main Navigation">
      <div className="nav-options">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>
      {/* <div className="bottom-options">
        <NavItem
          icon={FaSignOutAlt}
          label="Logout"
          onClick={() => console.log('Logout clicked')}
        />
        <div className="user-profile">
          <div className="user-avatar">JR</div>
          <span>3690389</span>
        </div>
        <NavItem
          icon={FaMapMarkerAlt}
          label="DNEK"
          onClick={() => console.log('Location clicked')}
        />
      </div> */}
    </nav>
  );
};

export default Sidebar;
