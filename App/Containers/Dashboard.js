import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Picker } from 'react-native';
import { Images } from '../Themes';
import { Button, SearchBar } from 'react-native-elements';
import {connect} from 'react-redux';
import {fetchTodosRequest, updateTodoStateRequest, setVisibilityFilter } from '../Redux/TodosRedux';
import TodosList from '../Components/TodosList';
import FlatListDemo from '../Components/FlatListDemo';
import SelectionListDemo from '../Components/SelectionListDemo';
import {Select, Option} from "react-native-chooser";
import Colors from '../Themes/Colors';

// Styles
import styles from './Styles/LaunchScreenStyles'


class DashboardComponent extends Component {

  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    console.log("State is");
    console.log(this.state);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View>
            <SearchBar
              onChangeText={(text) => console.log(`text changed to ${text}`)}
              onClearText={() => console.log('text cleared')}
              placeholder="Search TODO item"
              clearIcon
            />
            <Text> Filter Todos</Text>
            <Select
              onSelect = { (selectedFilter) => this.props.setVisibilityFilter(selectedFilter) }
              selected = { this.props.visibilityFilter }
              style = {{borderWidth : 1, borderColor : "purple"}}
              textStyle = {{}}
              backdropStyle  = {{backgroundColor : Colors.c1}}
              optionListStyle = { {backgroundColor : Colors.c1} }
            >
              <Option value = "all">All</Option>
              <Option value = "complete">Completed</Option>
              <Option value = "incomplete">Incomplete</Option>
            </Select>
          </View>
          <SelectionListDemo todos={this.props.todos} visibilityFilter={this.props.visibilityFilter} isLoading={this.props.isFetching} updateTodoState={this.props.updateTodoState} />
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
    visibilityFilter: state.todosData.visibilityFilter,
    language: 'js'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
