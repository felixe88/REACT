import React from "react";
import "./App.css";
import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <Counter counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
