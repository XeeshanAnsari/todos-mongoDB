import {combineReducers}  from 'redux'
import TodoReducers from './todo_reducer'



const rootReducers = combineReducers({
      todos:TodoReducers
})

export default rootReducers