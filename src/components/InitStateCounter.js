import React from "react";

class InitStateCounter extends React.Component {
  state = {
    count: this.props.value,
    disabledPlus: false,
    disabledMinus: false
  };
  add = (state, props) => {
    this.setState((state, props) => ({
      disabledPlus:
        (this.props.max = this.props.max - 1) <= this.state.count
          ? true
          : false,
      count: state.count + 1
    }));
  };
  substract = (state, props) => {
    this.setState((state, props) => ({
      disabledMinus:
        (this.props.min = this.props.min + 1) >= this.state.count
          ? true
          : false,
      count: state.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Задача 1.4 – Counter with init state</h2>
        <p>Button was clicked</p>
        <button disabled={this.state.disabledMinus} onClick={this.substract}>
          -
        </button>
        <span style={{ margin: "0 1rem" }}>{this.state.count} times</span>
        <button disabled={this.state.disabledPlus} onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default InitStateCounter;
