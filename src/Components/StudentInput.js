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
        <div className="card add-student-card"> 
          <h3 className="card-header student-header">Add Student</h3><br />
          <form onSubmit={(event) => this.handleOnSubmit(event)} >
            <label>Name</label><br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => this.handleOnChange(event)} /><br /><br />
            <label>Stage</label><br /> 
            <input
              type="text"
              name="stage"
              value={this.state.stage}
              onChange={(event) => this.handleOnChange(event)} /><br /><br />
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
    );
  }
};

export default StudentInput;