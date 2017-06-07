const todosController = require('../controllers/todos')

module.exports =(app) =>{
    app.post('/api/todos', todosController.createTodos)
    app.get('/api',(req, res ,next) =>{ res.send('afasf') })
}