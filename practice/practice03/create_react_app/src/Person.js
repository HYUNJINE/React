import React from "react";

// const Person = ({ name, age }) => (
//   <div>
//     <h1>
//       이름은 {name} 나이는 {age}
//     </h1>
//   </div>
// );

//return 빼려면 한줄로 쓰거나, 괄호로묶으면됨

class Person extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>
          이름은 {name} 나이는 {age}
        </h1>
      </div>
    );
  }
}
//class 는 this 로 받음
export default Person;
