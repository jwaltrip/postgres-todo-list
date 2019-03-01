import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App mt-5">
        <h2 className="mb-3">To-Do List</h2>
        <TodoList/>
      </div>
    );
  }
}

export default App;
