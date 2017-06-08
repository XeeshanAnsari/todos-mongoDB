const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const todosSchema = new Schema({
    todos: {
        type: String,
        required: true

    }
})


const Todos = mongoose.model('todos', todosSchema);


module.exports = Todos