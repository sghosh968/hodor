import { List, ListItem } from 'react-native-elements';
import { FlatList, View, Text } from "react-native";
import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodosList extends Component {

  _keyExtractor(item) {
    console.log("In function keyExtractor ..");
    console.log(item.id);
    return item.id;
  }

  filterTodosByState(todos, currentFilter) {
    if (currentFilter === "all")
      return todos;
    else
      return todos.filter(todo => todo.status === currentFilter)
  }


  render () {
    let todos = this.props.todos;
    let isLoading = this.props.isLoading;
    let currentFilter = this.props.visibilityFilter;
    return (
        <View>
          <FlatList
            data={this.filterTodosByState(todos, currentFilter)}
            renderItem={({ item }) => (
              <TodoListItem
                updateTodoState={this.props.updateTodoState}
                todo={item}
              />
            )}
            keyExtractor={ (item) => item.id }
          />
        </View>
    )
  }
}
