import React from "react";

class CallbackCounter extends React.Component {
  state = {
    count: this.props.value
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

  componentDidUpdate() {
    this.props.onChange(this.state.count);
  }

  render() {
    return (
      <div>
        <h2>Task 1.5 – Counter with a callback</h2>
        <p>Button was clicked</p>
        <button onClick={this.substract}>
          -
        </button>
        <span style={{ margin: "0 1rem" }}>{this.state.count} times</span>
        <button onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default CallbackCounter;