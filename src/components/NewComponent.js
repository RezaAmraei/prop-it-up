import React, { Component } from "react";

class NewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }
  birthday() {
    console.log(this.state);
    let newAge = this.state.age + 1;
    this.setState({ age: newAge });
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.lastName}, {this.props.firstName}
        </h1>
        {console.log(this.state.age)}
        <p>Age : {this.state.age}</p>
        <p>Hair Color : {this.props.hairColor} </p>
        <button onClick={this.birthday.bind(this)}>
          Birthday button for {this.props.firstName} {this.props.lastName}
        </button>
      </div>
    );
  }
}

export default NewComponent;
