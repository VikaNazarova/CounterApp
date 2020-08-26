import React from "react";

class BoundedCounter extends React.Component {
  state = {
    count: 0,
    disabled: false
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
  
//   componentDidUpdate() {
//     if ((this.props.min >= this.state.count) || (this.props.max <= this.state.count)) {
//         this.setState((state, props) => ({
//             disability: true
//         }));
//     }
//   }
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
