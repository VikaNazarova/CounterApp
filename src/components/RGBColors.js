import React from "react";

class RGBColors extends React.Component {
  state = {
    red: this.props.red,
    green: this.props.green,
    blue: this.props.blue,
    color: this.props.color
  };

  render() {
    return (
      <div>
        <h2>Задача 1.7 – RGB Colors</h2>
        <div style={{ width: "50px", 
        height: "30px", 
        backgroundColor: this.state.color }}>
        </div> 
        <p>Задача со звездочкой:</p>
        <div style={{ width: "50px", 
        height: "30px", 
        backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})` }}>
        </div> 
      </div>
    );
  }
}

export default RGBColors;