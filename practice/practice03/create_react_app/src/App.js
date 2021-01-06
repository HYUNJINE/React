import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import React from "react";
import Person from "./Person";
class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.test);
    this.state = {
      person: [
        { name: "이현진", age: 26 },
        { name: "이현진", age: 23 },
        { name: "이현진", age: 21 },
      ],
    };
  }

  //클래스에서 state사용가능
  render() {
    const { person } = this.state;
    return (
      // return React.createElement(
      //   "div",
      //   { className: "A" },
      //   "안녕하세요 react세계입니다."
      // );
      // 이런식으로 만들면 병렬처리에 문제가생김
      <div className="hi">
        <h1>병렬처리</h1>
        <h1>병렬처리</h1>
        <h1>병렬처리</h1>
        <Person name={this.state.person[0].name} age={23}></Person>
        <Person name={"여경희"} age={51}></Person>
        <Person name={"이인호"} age={54}></Person>
        <Person name={"흰둥이"} age={5}></Person>
      </div>
      //jsx 의 필요성
      //컴포넌트의 재사용성
    );
  }
}

// function Person() {
//   return <h1>함수형 컴포넌트다임마 지리지 ㅋ</h1>;
//   //이때 함수형 컴포넌트의 첫글자는 대문자이다 무조건임
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
