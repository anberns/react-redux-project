import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg nav-styled " >
      <NavLink className="nav-item nav-link nav-brand-styled"
        to="/"
        exact
      >Rapid Exchange</NavLink>
      <NavLink className="nav-item nav-link nav-link-styled"
        to="/users/1"
        exact
      >Profile</NavLink>
      <NavLink className="nav-item nav-link nav-link-styled"
        to="/users/1/students"
        exact
      >Students</NavLink>
    </nav>
  </div>
)
export default Navbar;