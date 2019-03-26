import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    textLength: 0,
    textValue: ""
  };

  onTextChangeHandler = event => {
    const textValue = event.target.value;
    const stateCopy = { ...this.state };
    stateCopy.textLength = textValue.length;
    stateCopy.textValue = textValue;
    this.setState(stateCopy);
  };

  deleteCharacterHandler = index => {
    // Create new array of characters based on current state of textValue stirng property and delete character at index
    const textValueArray = this.state.textValue.split("");
    textValueArray.splice(index, 1);

    // Rebuild string
    const newTextValue = textValueArray.join("");

    // Copy state object and update specific property
    let stateCopy = {
      ...this.state
    };

    stateCopy.textValue = newTextValue;
    stateCopy.textLength = newTextValue.length;

    this.setState(stateCopy);
  };

  render() {
    /* Render a list of Chars for each letter of the entered text. */
    let displayCharacterList = null;
    displayCharacterList = this.state.textValue.split("").map((char, index) => {
      return (
        <Char
          key={index}
          char={char}
          deleteCharacter={() => this.deleteCharacterHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <h2>Enter Some Text And Dynamically Build Components</h2>
        <input
          type="text"
          onChange={this.onTextChangeHandler}
          value={this.state.textValue}
        />
        <p>{this.state.textLength}</p>
        <Validation textLength={this.state.textLength} />
        {displayCharacterList}
      </div>
    );
  }
}

export default App;
