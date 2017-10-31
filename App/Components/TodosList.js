import { List, ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodosList extends Component {

  render () {
    let todos = this.props.todos;
    let isLoading = this.props.isLoading;
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          todos.map((todo) => (
            <TodoListItem
              updateTodoState={this.props.updateTodoState}
              todo={todo}
              key={todo.id}
            />
          ))
        }
      </List>
    )
  }
}
