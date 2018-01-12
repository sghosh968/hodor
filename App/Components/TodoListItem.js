import { ListItem, CheckBox } from 'react-native-elements'
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


/*
  Styles
*/
import styles from '../Containers/Styles/LoginStyles';

export default class TodosListItem extends React.PureComponent {

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
      <View key={ todo.id }>
        <CheckBox
          containerStyle={styles.listItemContainer}
          title={todo.task}
          onPress={ () => {
            let updatedState = this.getTodoState(todo.status);
            this.props.updateTodoState(todo.id, updatedState);
          } }
          checked={isComplete}
        />
      </View>
    )
  }
}
