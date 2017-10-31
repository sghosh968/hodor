import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import * as TodosRedux from '../Redux/TodosRedux'



/*
  create our store * this invokes default function inported in Redux/index.js
  which inturn triggers store creation in Redux/CreateStore
*/
const store = createStore()



// let initialTodos = [
//   {
//     'id'    : 1,
//     'task'  : 'Task 1',
//     'state' : 'incomplete'
//   }, {
//     'id'    : 2,
//     'task'  : 'Task 1',
//     'state' : 'incomplete'
//   }, {
//     'id'    : 3,
//     'task'  : 'Task 1',
//     'state' : 'incomplete'
//   }, {
//     'id'    : 4,
//     'task'  : 'Task 1',
//     'state' : 'incomplete'
//   }
// ];
//
// console.log("Initial State", store.getState());









/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {

  // componentDidMount() {
  //   console.log("Dispatching fetchTodosRequestSuccess");
  //   store.dispatch(TodosRedux.fetchTodosRequestSuccess({
  //     todos: initialTodos
  //   }));
  //   console.log("State", store.getState());
  // }



  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// export root component
export default App
