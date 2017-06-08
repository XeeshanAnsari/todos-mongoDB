import React, { Component } from 'react';
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import TodoMiddleware from '../middleware/todo'

function mapDispatchToProps(dispatch) {
    return {
        create: (todo) => dispatch(TodoMiddleware.createTodo(todo)),
        getTodos: () => dispatch(TodoMiddleware.getAllTodos()),
        deleteTodo:(id) => dispatch(TodoMiddleware.delete(id))
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
                <form onSubmit={this.onSubmit.bind(this)} style={{textAlign:'center'}}>
                    <TextField name='todos' ref='todo' />
                    <FlatButton label='Submit' type='submit' />
                </form>
                {console.log(this.props.todos)}
                {this.props.todos.map(todo => {
                   
                    return (

                        <Card key={todo._id} style={{textAlign:'center'}}> 
                            <CardHeader
                                title={todo.todos}
                               />
                            <CardActions>
                               <FlatButton label="Delete" secondary={true} onTouchTap={() => this.props.delete(todo._id)} />
                            </CardActions>
                        </Card>



                    )

                })}

            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);