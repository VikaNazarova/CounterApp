import React from "react";

class CallbackCounter extends React.Component {
  state = {
    count: this.props.value,
    disabledPlus: false,
    disabledMinus: false
  };
  add = (state, props) => {
    let max = this.props.max - 1;
    this.setState((state, props) => ({
      disabledPlus: max <= this.state.count ? true : false,
      count: state.count + 1
    }));
  };
  substract = (state, props) => {
    let min = this.props.min + 1;
    this.setState((state, props) => ({
      disabledMinus: min >= this.state.count ? true : false,
      count: state.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Задача 1.5 – Counter with callback</h2>
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

export default CallbackCounter;
