import { ListItem, CheckBox } from 'react-native-elements'
import React, { Component } from 'react';
// import {CheckBox} from 'react-native';

export default class TodosListItem extends Component {

  getTodoState(currentState) {
    if (currentState === "complete")
      return "incomplete";
    else if (currentState === "incomplete")
      return "complete";
    else
      return "incomplete";
  }

  render () {
    let todo = this.props.todo,
    isComplete = (todo.status === "complete" ? true : false);
    return (
        <ListItem
          key={todo.id}
          title={
              <CheckBox
                title={todo.task}
                onPress={ () => {
                  let updatedState = this.getTodoState(todo.status);
                  this.props.updateTodoState(todo.id, updatedState);
                } }
                checked={isComplete}
              />
            }
        />
    )
  }
}
