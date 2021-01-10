import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  // onClickHandler = () => {
  //   console.log("click");
  //   console.log(this);
  // };
  onClickHandler(payload) {
    // console.log("click");
    // console.log(this);
    // this.state.number++;
    // console.log(this.state);
    this.setState({ number: this.state.number + payload });
  }
  render() {
    return (
      <div className="App">
        <Display value={this.state.number} />
        <Button clickHandler={() => this.onClickHandler(1)}>증가버튼</Button>
        <Button clickHandler={() => this.onClickHandler(-1)}>감소버튼</Button>
        <button onClick={() => this.onClickHandler(1)}>증가</button>
        <button onClick={() => this.onClickHandler(-1)}>감소</button>
      </div>
    );
  }
}

export default App;
