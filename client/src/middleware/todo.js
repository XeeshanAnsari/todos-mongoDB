import axios from 'axios'
import TodosActions from '../actions/todo_action'
export default class TodoMiddlware {
    static createTodo(todos) {
        return dispatch => {
            console.log(todos)
            axios.post('http://localhost:3050/api/todos', { todos })
                .then((response) => {
                    dispatch(TodoMiddlware.getAllTodos())
                })
        }
    }


    static getAllTodos() {
        return dispatch => {
            axios.get('http://localhost:3050/api/todos')
                .then(response => {

                    dispatch(TodosActions.Todos(response.data))
                })
                .catch(error => console.log(error.message))
        }

    }


    static delete(todo) {
        return dispatch =>{
            axios.delete(`http://localhost:3050/api/todos/delete/${todo._id}`)
             .then(response =>{
                 dispatch(TodoMiddlware.getAllTodos())
             })
             .catch(error => console.log(error.message))
        }
    }
}