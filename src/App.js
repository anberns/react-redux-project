import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentsPage from './Containers/StudentsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/students" component={StudentsPage} />
        </React.Fragment>
      </Router>)
  }
}

export default App;
