import React from 'react';
import NavItem from './NavItem';
import './Navbar.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light nav-styled " >
      <NavItem path="/" linkName="Rapid Exchange" className="navbar-brand"/>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavItem path="/choose" linkName="App" className="nav-item nav-link" />
          <NavItem path="/users/1" linkName="Profile" className="nav-item nav-link"/>
          <NavItem path="/users/1/students" linkName="Students" className="nav-item nav-link" />
        </div>
      </div>
    </nav>
  </div>
)
export default Navbar;