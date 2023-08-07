//! todo reducer type decleration // rxconst
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = 'DELETE_TODO'
export const TOOGGLE_TODO = 'TOOGGLE_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'


//! Action Function Decleration-Function to use for dispatch // rxaction
export const addTodo = (payload) => ({type: ADD_TODO, payload})


//! Initial State 
const initialState = {
    todoList:[  ]
}


//! rxreducer
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
    return { todoList: [...state.todoList, {id: new Date().getTime(), text:payload, completed: false}]  }

  default:
    return state
  }
}
