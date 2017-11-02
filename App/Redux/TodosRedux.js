import fetch from 'isomorphic-fetch';

/*---- Actions Types ---- */
export const ADD_TODO = 'ADD_TODO',
REMOVE_TODO = 'REMOVE_TODO',
UPDATE_TODO_STATE_REQUEST = 'UPDATE_TODO_STATE_REQUEST',
UPDATE_TODO_STATE_REQUEST_SUCCESS = 'UPDATE_TODO_STATE_REQUEST_SUCCESS',
UPDATE_TODO_STATE_REQUEST_ERROR = 'UPDATE_TODO_STATE_REQUEST_ERROR',
FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
FETCH_TODOS_REQUEST_SUCCESS = 'FETCH_TODOS_REQUEST_SUCCESS';
SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';
SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*---- Actions creators ---- */
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function removeTodo(todoID) {
  return { type: REMOVE_TODO, todoID };
}

export function setFetchingStatus(status) {
  return { type: SET_FETCHING_STATUS, status };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function updateTodoStateRequest(todoID, updatedState) {
  let requestBody = {
    todo: {
        state: updatedState
      }
  };
  return (dispatch) => {
    return fetch(`https://hodor.dev/api/todos/${todoID}/updateTodoState`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        todo: {
          status: updatedState
        }
      })
    })
    .then(
      (response) => response.json(),
      (error) => console.log('An error occured.', error)
    )
    .then(
      (jsonResponse) => {
        dispatch(updateTodoStateRequestSuccess(jsonResponse));
      }
    )
    .catch((e) => {
      console.log("Error is", e);
    });
  }
}

export function updateTodoStateRequestSuccess(response) {
  return {
    type: UPDATE_TODO_STATE_REQUEST_SUCCESS,
    updatedTodo: response.updatedTodo
  };
}

export function fetchTodosRequest() {
  return (dispatch) => {
    dispatch(setFetchingStatus(true));
    return fetch('https://hodor.dev/api/todos')
    .then(
      (response) => response.json(),
      (error) => console.log('An error occured.', error)
    )
    .then(
      (jsonResponse) => {
        dispatch(fetchTodosRequestSuccess(jsonResponse));
        dispatch(setFetchingStatus(false));
      }
    )
  }
}

export function fetchTodosRequestSuccess(response) {
  return {
    type: FETCH_TODOS_REQUEST_SUCCESS,
    todos: response.todos
  };
}

/*---- Action handlers / Reducers ---- */

let initialState = {
  todos: [],
  visibilityFilter: "all"
};

export function todosReducer(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
    console.log("In reducer SET_VISIBILITY_FILTER, action is: ", action);
    return {
      ...state,
      visibilityFilter: action.filter,
    };
    // return state;
    case UPDATE_TODO_STATE_REQUEST:
    return state;
    case UPDATE_TODO_STATE_REQUEST_SUCCESS:
    let updatedTodo = action.updatedTodo;
    return {
      ...state,
      todos: state.todos.map( (todo) => {
        if (todo.id === updatedTodo.id)
          return updatedTodo;
        else
          return todo;
      })
    }
    case SET_FETCHING_STATUS:
    return {
      ...state,
      isFetching: action.status
    }
    case ADD_TODO:
    return [
      ...state.todos,
      action.payload.todo
    ]
    case REMOVE_TODO:
    return [
      ...state.todos,
      state.todos.filter( (todo) => todo.id != action.payload.todoID )
    ]
    case FETCH_TODOS_REQUEST:
    return state;
    case FETCH_TODOS_REQUEST_SUCCESS:
    return {
      ...state,
      todos: action.todos
    }
    default:
    return state;
  }
}
