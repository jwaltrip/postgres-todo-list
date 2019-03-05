import React from "react";
import { Container, ListGroup } from "reactstrap";
import TodoItem from "./TodoItem";
import TodoHeaderForm from "./TodoHeaderForm";

const TodoList = ({ todos, handleAddTodo, handleRemoveTask }) => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center">
          <ListGroup className="text-left w-50">
            <TodoHeaderForm addTodo={handleAddTodo} />

            {todos &&
              todos.map((todo, idx) => {
                return (
                  <TodoItem
                    key={idx}
                    taskName={todo.taskName}
                    removeTask={() => { handleRemoveTask(idx) }}
                  />
                );
              })}
          </ListGroup>
        </div>
      </Container>
    </div>
  );
};

export default TodoList;
