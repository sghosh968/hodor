import { List, ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodosList extends Component {

  filterTodosByState (todos, currentFilter) {
    debugger;
    if (currentFilter === "all")
      return todos;
    else
      return todos.filter(todo => todo.status === currentFilter)
  }

  render () {
    let todos = this.props.todos;
    let isLoading = this.props.isLoading;
    let currentFilter = this.props.visibilityFilter;
    debugger;
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          this.filterTodosByState (todos, currentFilter).map((todo) => (
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
