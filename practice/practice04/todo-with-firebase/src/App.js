import { Component } from "react";

class App extends Component {
  state = {
    tasks: [],
    task: "",
  };
  onClickHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const task = { todo: this.state.task };
    const tasks = [...this.state.tasks, task];
    this.setState({
      tasks: tasks,
      task: "",
    });
  };
  onChangeHandler = (e) => {
    console.log(e.target);
    this.setState({
      task: e.target.value,
    });
  };
  deleteHandler = (idx) => {
    const tasks = this.state.tasks.filter((task, i) => i !== idx);
    this.setState({ tasks });
  };
  render() {
    const taskDisplay = this.state.tasks.map((task, i) => {
      return (
        <div key={i}>
          <p>{task.todo}</p>
          <button onClick={() => this.deleteHandler(i)}>삭제</button>
        </div>
      );
    });
    return (
      <div className="container">
        <TaskAdd
          value={this.state.task}
          changeHandler={this.onChangeHandler}
          clickHandler={this.onClickHandler}
        ></TaskAdd>
        <div>
          <TaskDisplay
            tasks={this.state.tasks}
            deleteHandler={this.deleteHandler}
          ></TaskDisplay>
        </div>
      </div>
    );
  }
}
const TaskDisplay = ({ tasks, deleteHandler }) => {
  const taskDisplay = tasks.map((task, i) => {
    return (
      <div key={i}>
        <p className="title">{task.todo}</p>
        <button className="button is-danger" onClick={() => deleteHandler(i)}>
          삭제
        </button>
      </div>
    );
  });
  return taskDisplay;
};
const TaskAdd = ({ value, changeHandler, clickHandler }) => {
  return (
    <form className="field has-addons">
      <div className="control is-expanded">
        <input className="input" value={value} onChange={changeHandler}></input>
      </div>
      <div className="control">
        <button className="button is-primary" onClick={clickHandler}>
          저장
        </button>
      </div>
    </form>
  );
};
export default App;
