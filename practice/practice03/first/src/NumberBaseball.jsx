// const React = require("react");
import React, { Componet } from "react";
const { Componet } = React;
function getNumbers() {
  //숫자 4개 랜덤하게 뽑는함수
}
class NumberBaseball extends Componet {
  state = {
    result: "",
    value: "",
    tries: [],
    answer: getNumbers(),
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <div>시도 : {this.state.tries.length}</div>
          <ul>
            {["like", "like", "like", "like", "like"].map(() => {
              return <li>like</li>;
            })}
          </ul>
        </form>
      </>
    );
  }
}
export const hello = "hello";
//import {hello}

export default NumberBaseball; // import NumberBaseball
