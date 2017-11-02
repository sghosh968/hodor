import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';
import {fetchTodosRequest, updateTodoStateRequest, setVisibilityFilter } from '../Redux/TodosRedux';
import TodosList from '../Components/TodosList';
import {Select, Option} from "react-native-chooser";

// Styles
import styles from './Styles/LaunchScreenStyles'


class DashboardComponent extends Component {

  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <Select
            onSelect = { (selectedFilter) => this.props.setVisibilityFilter(selectedFilter) }
            selected = { this.props.visibilityFilter }
            style = {{borderWidth : 1, borderColor : "purple"}}
            textStyle = {{}}
            backdropStyle  = {{backgroundColor : "#d3d5d6"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
            <Option value = "all">All</Option>
            <Option value = "complete">Completed</Option>
            <Option value = "incomplete">Incomplete</Option>
          </Select>
          <TodosList todos={this.props.todos} visibilityFilter={this.props.visibilityFilter} isLoading={this.props.isFetching} updateTodoState={this.props.updateTodoState} />
        </ScrollView>
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodosRequest()),
  updateTodoState: (todoID, updatedState) => dispatch(updateTodoStateRequest(todoID, updatedState)),
  setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
})
// const mapDispatchToProps = dispatch => ({fetchTodos: () => dispatch(fetchTodosRequest())})


const mapStateToProps = (state) => {
  return {
    todos: state.todosData.todos,
    visibilityFilter: state.todosData.visibilityFilter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
