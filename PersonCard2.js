import React, { Component } from "react";

class PersonCard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }

  render() {
    return (
      <>
        <h1>
          {this.props.lastName}, {this.props.firstName}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button
          onClick={(e) => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          Birthday Button for {this.props.firstName} {this.props.lastName}
        </button>
      </>
    );
  }
}
export default PersonCard2;
