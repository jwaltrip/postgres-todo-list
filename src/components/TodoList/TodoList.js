import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class TodoList extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container>
          <div className="d-flex justify-content-center">
            <ListGroup className="text-left w-50">
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
              
              <ListGroupItem>
                <div className="d-flex flex-row align-items-center">
                  <div className="todo-text">Jerk off</div>
                  <div className="todo-remove-btn">
                    <Button color="danger" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              </ListGroupItem>
  
              <ListGroupItem>
                <div className="d-flex flex-row align-items-center">
                  <div className="todo-text">Wait 15 min</div>
                  <div className="todo-remove-btn">
                    <Button color="danger" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              </ListGroupItem>
  
              <ListGroupItem>
                <div className="d-flex flex-row align-items-center">
                  <div className="todo-text">Repeat</div>
                  <div className="todo-remove-btn">
                    <Button color="danger" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Container>
      </div>
    );
  }
}

export default TodoList;
