import React from "react";

class BoundedCounter extends React.Component {
  state = {
    count: 0,
    disabled: false
  };
  add = (state, props) => {
    this.setState((state, props) => ({
      count: state.count + 1,
      disabled: (this.props.max <= this.state.count) ? true : false
    }));
  };
  substract = (state, props) => {
    this.setState((state, props) => ({
      count: state.count - 1,
      disabled: (this.props.min >= this.state.count) ? true : false
    }));
  };
  
  render() {
    return (
      <div>
        <h2>Задача 1.3 – Counter with bounds</h2>
        <p>Button was clicked</p>
        <button disabled={this.state.disabled} onClick={this.substract}>-</button>
        <span style={{margin: '0 1rem'}}>
            {this.state.count} times
        </span>
        <button disabled={this.state.disabled} onClick={this.add}>+</button>
      </div>
    );
  }
}

export default BoundedCounter;
