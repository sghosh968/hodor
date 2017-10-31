import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import { todosReducer } from './TodosRedux'



/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav   : require('./NavigationRedux').reducer,
  todosData : todosReducer
})

export default () => {
  let { store } = configureStore(reducers)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
