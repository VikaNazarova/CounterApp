import React from "react";

class InitStateCounter extends React.Component {

  state = {
    count: this.props.value,
    min: this.props.min,
    max: this.props.max
  };

  add = (state, props) => {
    this.setState((state, props) => ({
      count: state.count + 1
    }));
  };
  
  substract = (state, props) => {
    this.setState((state, props) => ({
      count: state.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Task 1.4 – Counter with init state</h2>
        <p>Button was clicked</p>
        <button disabled={this.state.min >= this.state.count} onClick={this.substract}>
          -
        </button>
        <span style={{ margin: "0 1rem" }}>{this.state.count} times</span>
        <button disabled={this.state.max <= this.state.count} onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default InitStateCounter;