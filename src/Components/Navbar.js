import React from 'react';
import NavItem from './NavItem';
import './Navbar.css';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg nav-styled " >
      <NavItem path="/" linkName="Rapid Exchange" />
      <NavItem path="/users/1" linkName="Profile" />
      <NavItem path="/users/1/students" linkName="Students" />
    </nav>
  </div>
)
export default Navbar;