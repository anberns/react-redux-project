import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentsPage from './Containers/StudentsPage';
import HomePage from './Containers/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/students" component={StudentsPage} />
        </React.Fragment>
      </Router>)
  }
}

export default App;
