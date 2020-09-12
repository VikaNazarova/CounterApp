import React from "react";

class BoundedCounter extends React.Component {
  state = {
    count: 0,
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
        <h2>Задача 1.3 – Counter with bounds</h2>
        <p>Button was clicked</p>
        <button disabled={this.state.min >= this.state.count ? true : false} onClick={this.substract}>
          -
        </button>
        <span style={{ margin: "0 1rem" }}>{this.state.count} times</span>
        <button disabled={this.state.max <= this.state.count ? true : false} onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default BoundedCounter;