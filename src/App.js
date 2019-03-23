import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentsPage from './Containers/StudentsPage';
import HomePage from './Containers/HomePage';
import UserPage from './Containers/UserPage'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users/1" component={UserPage} />
          <Route exact path="/students" component={StudentsPage} />
        </React.Fragment>
      </Router>)
  }
}

export default App;
