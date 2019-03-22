import React, { Component } from 'react';

class StudentInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      stage: ''
      // add phonemes
    };
  };

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
    this.props.addStudent(this.state)
    this.setState({
      name: '',
      stage: ''
    });
  }

  render() {
    return (
        <div className="add-student-card"> 
          <h2>Add a Student</h2>
          <form onSubmit={(event) => this.handleOnSubmit(event)} >
            <label>Name</label><br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => this.handleOnChange(event)} /><br />
            <label>Stage</label><br /> 
            <input
              type="text"
              name="stage"
              value={this.state.stage}
              onChange={(event) => this.handleOnChange(event)} /><br />
            <input type="submit" />
          </form>
        </div>
    );
  }
};

export default StudentInput;