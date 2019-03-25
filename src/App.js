import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    textLength: null
  };

  onTextChangeHandler = event => {
    let textValue = event.target.value;
    // console.log(textValue.length);

    const stateCopy = { ...this.state };
    stateCopy.textLength = textValue.length;

    this.setState(stateCopy);
  };

  render() {
    return (
      <div className="App">
        <h2>Enter some text</h2>
        <input type="text" onChange={this.onTextChangeHandler} />
        <p>{this.state.textLength}</p>
      </div>
    );
  }
}

export default App;
