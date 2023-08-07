import {legacy_createStore as createStore} from "redux"
import { todoReducer } from "./todoReducer"
// import {combineReducers} from "redux"  to combine two different reducers // just incase


export const store = createStore (todoReducer)


// if you wanna use the combineReducer func. reducers must be combined as below
// const rootReducer = combineReducers({
//     reducer1,
//     reducer2
// })
//
// export const store = createStore (rootReducer)



