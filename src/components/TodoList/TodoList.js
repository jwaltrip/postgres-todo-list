import React, { Component } from "react";
import {
  Container,
  ListGroup,
} from "reactstrap";
import TodoItem from './TodoItem';
import TodoHeaderForm from "./TodoHeaderForm";

class TodoList extends Component {
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
      },
    ]
  };

  render() {
    const { todos } = this.state;
    
    return (
      <div>
        <Container>
          <div className="d-flex justify-content-center">
            <ListGroup className="text-left w-50">
              <TodoHeaderForm />
              
              {todos && todos.map((todo, idx) => {
                return <TodoItem key={idx} taskName={todo.taskName} />
              })}
            </ListGroup>
          </div>
        </Container>
      </div>
    );
  }
}

export default TodoList;
