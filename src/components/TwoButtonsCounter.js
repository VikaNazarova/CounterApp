import React from "react";

class TwoButtonsCounter extends React.Component {

  state = {
    count: 0
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
        <h2>Task 1.2 – Counter +-</h2>
        <p>Button was clicked</p>
        <button onClick={this.substract}>-</button>
        <span style={{margin: '0 1rem'}}>{this.state.count}</span>
        <button onClick={this.add}>+</button>
        <p>times</p>
      </div>
    );
  }
}

export default TwoButtonsCounter;