// needs form validation
import React, { Component } from 'react'
import { connect } from 'react-redux';
import authFetch from '../../actions/authFetch';
import '../ChoiceSelector.css'

class Auth extends Component {
  state = {
    email: "",
    password: ""
  }

  handleOnChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.authFetch(this.state.email, this.state.password);
  }

  render() {

    return (
      <div className="selectorDivCenter">
        <form>
          <br></br>
          <label>Email</label>
          <br></br>
          <input 
            type="email" 
            value={this.state.email} 
            name="email" 
            onChange={ (event) => this.handleOnChange(event)}
          />
          <br></br>
          <br></br>
          <label>Password</label>
          <br></br>
          <input 
            type="password" 
            value={this.state.password} 
            name="password" 
            onChange={ (event) => this.handleOnChange(event)}
          />
          <br></br>
          <button onClick={ (event) => this.submitHandler(event)} className="ownButton">Login</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authFetch: (email, password) => {
      dispatch(authFetch(email, password))
    }
  }
}

export default connect(mapDispatchToProps)(Auth);