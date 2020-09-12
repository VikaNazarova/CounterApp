import React from "react";

class ColorPicker extends React.Component {

    hexToRGB = (hex) => {
        hex = '0x' + hex
        let r = hex >> 16 & 0xFF
        let g = hex >> 8 & 0xFF
        let b = hex & 0xFF
        //return `rgb(${r}, ${g}, ${b})`
        return [r, g, b]
    }
    
    state = {
        red: this.hexToRGB(this.props.value)[0] || 0,
        green: this.hexToRGB(this.props.value)[1] || 0,
        blue: this.hexToRGB(this.props.value)[2] || 0,
        color: `rgb(${this.hexToRGB(this.props.value)})`
    };

    substract(color) {
        this.setState((state, props) => ({
            [color]: state.[color] - 1,
            color: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
        }));
    }

    add(color) {
        this.setState((state, props) => ({
            [color]: state.[color] + 1,
            color: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
        }));
    }

    componentDidUpdate() {  
        this.props.onChange(this.state.color);
    }

  render() {
    return (
    <div>
        <h2>Task 1.8 – ColorPicker</h2>

        <div style={{ width: "50px", 
        height: "30px", 
        backgroundColor: this.state.color }}>
        </div>

        <p>Red</p>
        <button onClick={this.substract.bind(this, "red")}>-</button>
        <span style={{ margin: "0 1rem" }}>{this.state.red}</span>
        <button onClick={this.add.bind(this, "red")}>+</button>

        <p>Green</p>
        <button onClick={this.substract.bind(this, "green")}>-</button>
        <span style={{ margin: "0 1rem" }}>{this.state.green}</span>
        <button onClick={this.add.bind(this, "green")}>+</button>

        <p>Blue</p>
        <button onClick={this.substract.bind(this, "blue")}>-</button>
        <span style={{ margin: "0 1rem" }}>{this.state.blue}</span>
        <button onClick={this.add.bind(this, "blue")}>+</button>
    </div>
    );
  }
}

export default ColorPicker;