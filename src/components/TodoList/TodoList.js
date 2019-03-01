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
              <ListGroupItem>
                <Form>
                  <FormGroup>
                    <h6 className="text-center">Add To-Do</h6>
                    <Input type="text" name="text" id="addTodo" placeholder="Add an item to the list..." />
                    <Button color="success">Add Todo</Button>
                  </FormGroup>
                </Form>
              </ListGroupItem>
              
              <ListGroupItem>
                Jerk off
                <span className="float-right">
                  <Button color="danger" size="sm">
                    Remove
                  </Button>
                </span>
              </ListGroupItem>

              <ListGroupItem>
                Wait 15 min
                <span className="float-right">
                  <Button color="danger" size="sm">
                    Remove
                  </Button>
                </span>
              </ListGroupItem>

              <ListGroupItem>
                Repeat
                <span className="float-right">
                  <Button color="danger" size="sm">
                    Remove
                  </Button>
                </span>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Container>
      </div>
    );
  }
}

export default TodoList;
