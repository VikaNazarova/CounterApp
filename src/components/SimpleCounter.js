import React from "react";

class SimpleCounter extends React.Component {
  state = {
    count: 0
  };

  counter = (state, props) => {
    this.setState((state, props) => ({
      count: state.count + 1
    }));
  };
  
  render() {
    return (
      <div>
        <h2>Task 1.1 – Counter</h2>
        <button onClick={this.counter}>Click Me</button>
        <p>Clicks: {this.state.count}</p>
      </div>
    );
  }
}

export default SimpleCounter;