const todosController = require('../controllers/todos')

module.exports =(app) =>{
    app.post('/api/todos', todosController.createTodos)
    app.get('/api/todos' , todosController.getTodos)
    app.delete('/api/todos/delete/:id', todosController.deleteTodo)
}