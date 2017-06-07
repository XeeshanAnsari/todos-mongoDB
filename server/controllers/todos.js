const Todos = require('../models/todos')

module.exports = {

    createTodos(req, res, next ){
        const todoProps = req.body;
        console.log(todoProps)
        Todos.create(todoProps)
        .then(todo => res.send(todo))
        .catch(next)



    }
}