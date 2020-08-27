import React from "react";
import PropTypes from "prop-types";

class BoundedCounter extends React.Component {
  state = {
    count: 0,
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
        <h2>Задача 1.3 – Counter with bounds</h2>
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

// BoundedCounter.propTypes = {
//   max: PropTypes.number,
//   min: PropTypes.number
// };

export default BoundedCounter;
