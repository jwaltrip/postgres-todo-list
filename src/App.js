import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App mt-5">
        <TodoList />
      </div>
    );
  }
}

export default App;
