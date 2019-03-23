import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavItem = (props) => (
  <NavLink className="nav-item nav-link nav-link-styled"
    to={props.path}
    exact
  >{props.linkName}</NavLink>
) 

export default NavItem;