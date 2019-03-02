import React from "react";
import {
  ListGroupItem,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";

const TodoHeaderForm = (props) => {
  return (
    <ListGroupItem className="todo-form-header">
      <Form>
        <FormGroup>
          <h5 className="text-center">Add To-Do</h5>
          <div className="add-todo-form">
            <Input type="text" name="text" id="addTodo" placeholder="Add an item to the list..." />
            <Button color="success">Add Todo</Button>
          </div>
        </FormGroup>
      </Form>
    </ListGroupItem>
  );
};

export default TodoHeaderForm;