import React,{Component}  from 'react'
import AppBar  from 'material-ui/AppBar'
import Input from '../../containers/Input'

export default class App extends Component{
    render(){
       return(
           <div>
               <AppBar
                 title="TODO APP"
                 // iconStyleLeft={{ "display": "none" }}
                /> 
                
                <Input />
           </div>    
       )
    }
}