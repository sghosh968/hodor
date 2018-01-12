import { SectionList, View, Text } from 'react-native';
import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class SelectionListDemo extends Component {
  filterTodosByState(todos, currentFilter) {
    if (currentFilter === "all")
      return todos;
    else
      return todos.filter(todo => todo.status === currentFilter)
  }

  filterTodosByName(todos, query) {
    return todos.filter((todo) => {
      todo.task.toLowerCase().includes(query);
    })
  }

  render() {
    const todos = this.props.todos;
    return (
      <View>
        <Text>SelectionList Demo</Text>
        <SectionList
          sections={[
            { title: 'Complete', data: this.filterTodosByState(todos, 'complete') },
            { title: 'InComplete', data: this.filterTodosByState(todos, 'incomplete') }
          ]}
          renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
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
