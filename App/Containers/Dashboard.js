import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';
import {fetchTodosRequest, updateTodoStateRequest } from '../Redux/TodosRedux';
import TodosList from '../Components/TodosList';

// Styles
import styles from './Styles/LaunchScreenStyles'


class DashboardComponent extends Component {

  componentDidMount () {
    this.props.fetchTodos()
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <TodosList todos={this.props.todos} isLoading={this.props.isFetching} updateTodoState={this.props.updateTodoState} />
        </ScrollView>
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodosRequest()),
  updateTodoState: (todoID, updatedState) => dispatch(updateTodoStateRequest(todoID, updatedState))
})
// const mapDispatchToProps = dispatch => ({fetchTodos: () => dispatch(fetchTodosRequest())})


const mapStateToProps = (state) => {
  return {
    todos: state.todosData.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
