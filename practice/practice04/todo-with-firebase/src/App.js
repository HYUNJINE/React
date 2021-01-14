import { Component } from "react";
import { firestore } from "./firebase";
class App extends Component {
  state = {
    tasks: [],
    task: "",
  };
  componentDidMount() {
    const tasks = [...this.state.tasks];
    firestore
      .collection("tasks")
      .get()
      .then((docs) => {
        //console.log("성공?");
        docs.forEach((doc) => {
          //console.log(doc.data().todo + " " + doc.id);
          tasks.push({ todo: doc.data().todo, id: doc.id });
        });
        this.setState({ tasks: tasks });
      });
  }
  onClickHandler = (e) => {
    e.preventDefault();
    firestore
      .collection("tasks")
      .add({ todo: this.state.task })
      .then((r) => {
        const tasks = [
          ...this.state.tasks,
          { todo: this.state.task, id: r.id },
        ];
        this.setState({
          tasks,
          task: "",
        });
      });
    // console.log(e.target);
    // const task = { todo: this.state.task };
    // const tasks = [...this.state.tasks, task];
    // this.setState({
    //   tasks: tasks,
    //   task: "",
    // });
  };
  onChangeHandler = (e) => {
    console.log(e.target);
    this.setState({
      task: e.target.value,
    });
  };
  deleteHandler = (id) => {
    //console.log(id);
    firestore
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        // console.log("삭제성공");
        const tasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({ tasks });
      });
    // const tasks = this.state.tasks.filter((task, i) => i !== idx);
    // this.setState({ tasks });
  };
  render() {
    const taskDisplay = this.state.tasks.map((task) => {
      console.log(task);

      return (
        <div key={task.id}>
          <p>{task.todo}</p>
          <button onClick={() => this.deleteHandler(task.id)}>삭제</button>
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
  const taskDisplay = tasks.map((task) => {
    return (
      <div key={task.id} className="box">
        <div className="level">
          <div className="level-left">
            <p className="title">{task.todo}</p>
          </div>
          <div className="level-right">
            <button
              className="button is-danger"
              onClick={() => deleteHandler(task.id)}
            >
              삭제
            </button>
          </div>
        </div>
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
