import React from "react";

class RGBCounter extends React.Component {
  state = {
    red: this.props.red,
    green: this.props.green,
    blue: this.props.blue
  };

  substract(color) {
    this.setState((state, props) => ({
      [color]: state.[color] - 1
    }));
  }

  add(color) {
    this.setState((state, props) => ({
      [color]: state.[color] + 1
    }));
  }

  render() {
    return (
      <div>
        <h2>Задача 1.6 – RGB Counters</h2>
        <p>Red</p>
        <button onClick={this.substract.bind(this, "red")}>-</button>
        <span style={{ margin: "0 1rem" }}>{this.state.red} times</span>
        <button onClick={this.add.bind(this, "red")}>+</button>

        <p>Green</p>
        <button onClick={this.substract.bind(this, "green")}>-</button>
        <span style={{ margin: "0 1rem" }}>{this.state.green} times</span>
        <button onClick={this.add.bind(this, "green")}>+</button>

        <p>Blue</p>
        <button onClick={this.substract.bind(this, "blue")}>-</button>
        <span style={{ margin: "0 1rem" }}>{this.state.blue} times</span>
        <button onClick={this.add.bind(this, "blue")}>+</button>
      </div>
    );
  }
}

export default RGBCounter;
