import React, { Component } from 'react';
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import TodoMiddleware from '../middleware/todo'

function mapDispatchToProps(dispatch){
    return{
        create : (todo) => dispatch(TodoMiddleware.createTodo(todo)) 
    }
}

function mapStateToProps(){
   return{

   }
}
class Input extends Component {
    constructor() {
        super()
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
                <form onSubmit={this.onSubmit.bind(this)}>
                    <TextField name='todos' ref='todo' />
                    <FlatButton label='Submit' type='submit'/>
                </form>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);