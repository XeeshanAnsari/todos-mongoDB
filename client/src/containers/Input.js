import React, { Component } from 'react';
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import TodoMiddleware from '../middleware/todo'

function mapDispatchToProps(dispatch) {
    return {
        create: (todo) => dispatch(TodoMiddleware.createTodo(todo)),
        getTodos: () => dispatch(TodoMiddleware.getAllTodos()),
        deleteTodo: (todo) => dispatch(TodoMiddleware.delete(todo)),
        editTodo: (id, todo) => dispatch(TodoMiddleware.update(id, todo))
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

class Input extends Component {


    constructor() {
        super()
        this.state = {
            openDialog: false,
            editTodoId: '',

        }
        this.handleEdit = this.handleEdit.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    handleEdit(todo) {
        this.setState({
            openDialog: !this.state.openDialog,
            editTodoId: todo._id,
        })
    }
    updateTodo(e) {

        let edit = this.refs.editTodo.getValue();
        console.log(edit)
        this.props.editTodo(this.state.editTodoId, edit)

    }


    componentWillMount() {
        this.props.getTodos()

    }

    onSubmit(e) {
        e.preventDefault();
        let todo = this.refs.todo.getValue();
        this.props.create(todo)
        this.refs.todo.value = "";
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} style={{ textAlign: 'center' }}>
                    <TextField name='todos' ref='todo' />
                    <FlatButton label='Submit' type='submit' />
                </form>
                {console.log(this.props.todos)}
                {this.props.todos.map(todo => {

                    return (

                        <Card key={todo._id} style={{ textAlign: 'center' }}>
                            <CardHeader
                                title={todo.todos}

                            />
                            <CardActions>
                                <FlatButton label="Edit" secondary={true} onTouchTap={() => this.handleEdit(todo)} />
                                <FlatButton label="Delete" secondary={true} onTouchTap={() => this.props.deleteTodo(todo)} />
                            </CardActions>
                        </Card>



                    )

                })}
                <Dialog
                    title="Edit Able Todo"
                    open={this.state.openDialog}
                >
                    <from style={{ textAlign: 'centre' }}>
                        <TextField
                            name="editTodo"
                            ref='editTodo'
                        />

                        <FlatButton label="cancle" primary={true} onTouchTap={() => { this.setState({ openDialog: false }) }} />
                        <FlatButton label="Save" secondary={true} onTouchTap={() => this.updateTodo()} />
                    </from>

                </Dialog>

            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);