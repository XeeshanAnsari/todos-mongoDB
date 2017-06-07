import axios from 'axios'

export default class TodoMiddlware{
      static createTodo(todos){
          return dispatch =>{
              console.log(todos)

              axios.post('http://localhost:3050/api/todos' , {todos})
              .then(()=>{
                 console.log('add todo')
              })
          }
      }
}