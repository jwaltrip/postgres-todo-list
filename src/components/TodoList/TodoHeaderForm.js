import React from "react";
import { ListGroupItem, Button, Form, FormGroup, Input } from "reactstrap";

class TodoHeaderForm extends React.Component {
  state = {
    taskInputText: ''
  };
  
  onTextChange = (e) => {
    e.preventDefault();
    
    this.setState({ [e.target.name]: e.target.value });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
  
    const { taskInputText } = this.state;
    const { addTodo } = this.props;
    
    addTodo(taskInputText);
    this.setState({ taskInputText: '' });
  };
  
  render() {
    const { taskInputText } = this.state;

    return (
      <ListGroupItem className="todo-form-header">
        <Form onSubmit={this.onSubmitTask}>
          <FormGroup>
            <h5 className="text-center">Add To-Do</h5>
            <div className="add-todo-form">
              <Input
                type="text"
                name="taskInputText"
                id="addTodo"
                placeholder="Add an item to the list..."
                onChange={this.onTextChange}
                value={taskInputText}
              />
              <Button color="success" onClick={this.onSubmitTask}>Add Todo</Button>
            </div>
          </FormGroup>
        </Form>
      </ListGroupItem>
    );
  }
}

export default TodoHeaderForm;
