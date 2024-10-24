import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.css';

const NavItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <div 
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <Icon className="icon" />
      <span>{label}</span>
    </div>
  );
};

NavItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

NavItem.defaultProps = {
  isActive: false,
  onClick: () => {},
};

export default NavItem;
