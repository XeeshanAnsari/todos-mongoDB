const Todos = require('../models/todos')

module.exports = {

    createTodos(req, res, next) {
        const todoProps = req.body;
        Todos.create(todoProps)
            .then(todo => res.send(todo))
            .catch(next)
    },

    getTodos(req, res, next) {
        const todoProps = req.body;
        Todos.find({})
            .then(todos => res.send(todos))
            .catch(next)
    },

    deleteTodo(req, res, next) {
        const todoId =  req.params.id;

        Todos.findByIdAndRemove({ _id: todoId })
         .then(todo => res.status(204).send(todo))
         .catch(next)
    }

}