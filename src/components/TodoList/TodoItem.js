import React from "react";
import {
  ListGroupItem,
  Button,
} from "reactstrap";

const TodoItem = ({ taskName }) => {
  return (
    <ListGroupItem>
      <div className="d-flex flex-row align-items-center">
        <div className="todo-text">{taskName}</div>
        <div className="todo-remove-btn">
          <Button color="danger" size="sm">
            Remove
          </Button>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default TodoItem;