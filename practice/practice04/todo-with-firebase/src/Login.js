import React from "react";
import firebase from "./firebase";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onClickHandler = (e) => {
    e.preventDefault();
    firebase
      .doSingInWithEmailAndPassWord(this.state.username, this.state.password)
      .then((
        r //console.log(r);
      ) => this.props.login());
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form>
          <input
            name="username"
            value={username}
            type="text"
            onChange={this.onChangeHandler}
          ></input>
          <input
            tyep="password"
            name="password"
            value={password}
            onChange={this.onChangeHandler}
          ></input>
          <button onClick={this.onClickHandler}>로그인</button>
        </form>
      </div>
    );
  }
}

export default Login;
