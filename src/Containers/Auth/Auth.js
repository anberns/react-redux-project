import React, { Component } from 'react'
import '../ChoiceSelector.css'

export default class extends Component {
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

  handleOnSubmit(event) {
    event.preventDefault();
    console.log("A")
    this.props.addStudent(this.state)
    console.log("B")
    this.setState({
      name: '',
      stage: ''
    });
  }

  render() {

    return (
      <div className="selectorDivCenter">
        <form>
          <br></br>
          <label>email</label>
          <br></br>
          <input 
            type="email" 
            value={this.state.email} 
            name="email" 
            onChange={ (event) => this.handleOnChange(event)}
          />
          <br></br>
          <br></br>
          <label>password</label>
          <br></br>
          <input 
            type="password" 
            value={this.state.password} 
            name="password" 
            onChange={ (event) => this.handleOnChange(event)}
          />
          <br></br>
          <button onClick={ this.submitHandler} className="ownButton">Login</button>
        </form>
      </div>
    )
  }
}