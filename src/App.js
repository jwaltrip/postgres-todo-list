import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        taskName: "Task 1"
      },
      {
        id: 2,
        taskName: "Task 2"
      },
      {
        id: 3,
        taskName: "Task 3"
      }
    ]
  };

  handleAddTodo = (text) => {
    const newState = {...this.state};
    
    if (text) {
      const newTodo = {
        id: Date.now(),
        taskName: text
      };
      
      newState.todos = [newTodo, ...newState.todos];
      this.setState(newState);
    }
    
    // this.setState({
    //   todos: [todo, ...this.state.todos]
    // });
  };

  render() {
    return (
      <div className="App mt-5">
        <TodoList
          todos={this.state.todos}
          handleAddTodo={this.handleAddTodo}
        />
      </div>
    );
  }
}

export default App;
