import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        },
        {
          task: "Do Dishes",
          id: 1528817012345,
          completed: false
        }
      ],
      taskInput: ""
    };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.taskInput,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
      taskInput: " "
    });
  };

  toggleComplete = id => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.map(taskInput => {
      if (taskInput.id === id) {
        taskInput.completed = !taskInput.completed;
        return taskInput;
      } else {
        return taskInput;
      }
    });
    this.setState({ tasks });
    console.log(this.state.tasks);
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state);
    let tasks = this.state.tasks.filter(
      taskInput => taskInput.completed === false
    );
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList
          handleToggleComplete={this.toggleComplete}
          tasks={this.state.tasks}
        />

        <TodoForm
          taskInput={this.state.taskInput}
          changeHandler={this.changeHandler}
          addTask={this.addTask}
          clearTodo={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
