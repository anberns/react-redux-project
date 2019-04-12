import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentsPage from './Containers/StudentsPage';
import HomePage from './Containers/HomePage';
import ChoiceSelector from './Containers/ChoiceSelector';
import UserPage from './Containers/UserPage'
import Navbar from './Components/Navbar'
import RapidApp from './Containers/RapidApp'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/choose" component={ChoiceSelector} />
          <Route exact path="/users/1" component={UserPage} />
          <Route exact path="/users/1/students" component={StudentsPage} />
          <Route exact path="/rapid_app" component={RapidApp} />
        </React.Fragment>
      </Router>)
  }
}

export default App;
