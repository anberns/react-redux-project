import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return(
    <div>
      <nav className="navbar navbar-expand-lg nav-styled " >
        <NavLink className="nav-item nav-link nav-brand-styled"
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          /* add prop for activeStyle */
        >Rapid Exchange</NavLink>
        <NavLink className="nav-item nav-link nav-link-styled"
          to="/user"
          exact
        >Profile</NavLink>
        <NavLink className="nav-item nav-link nav-link-styled"
          to="/students"
          exact
        >Students</NavLink>
    </nav>
  </div>
    )
  }
}