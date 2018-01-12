import { FlatList, View, Text } from 'react-native';
import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class FlatListDemo extends Component {
  filterTodosByState(todos, currentFilter) {
    if (currentFilter === "all")
      return todos;
    else
      return todos.filter(todo => todo.status === currentFilter)
  }

  render() {
    let todos = this.props.todos;
    const currentFilter = this.props.visibilityFilter;
    // debugger;
    return (
      <View>
        <Text>FlatList Demo</Text>
        <FlatList
          data={this.filterTodosByState(todos, currentFilter)}
          renderItem={({ item }) => (
            <TodoListItem
              updateTodoState={this.props.updateTodoState}
              todo={item}
              />
            )}
          keyExtractor={item => item.id}
          />
      </View>
    );
  }
}
