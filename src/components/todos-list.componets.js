import React, {Component} from 'react';
import { Link } from 'react-routet-dom'; 
import axios from 'axios';

const Todo = props => (
    <tr>
     <td className={props.todo.todo_completed ? 'completed' :''}>{props.todo.todo_description}</td>   
     <td className={props.todo.todo_completed ? 'completed' :''}>{props.todo.todo_responsible}</td>
     <td className={props.todo.todo_completed ? 'completed' :''}>{props.todo.todo_priority}</td>
     <td> 
         <Link to={"/edit/"+props.todo_id}>Edit</Link>
     </td>
    </tr>
)


export default class TodosList extends Component {


    constructor(props) {
    super(props);
        this.state = {todos: []};    
    }

componentDidMount()  {
    axios.get('https://localhost:4000/todos/')
    .then(response => {
        this.setState({todos: response.date});
    })
    .catch(function (error){
        console.log(error);
    })
this.componentDidUpdate() {
    axios.get('https://localhost:4000/todos/')
    .then(response => {
        this.setState({todos: response.date});
    })
    .catch(function (error){
        console.log(error);
    })  
}

}

todosList(){
    return this.state.todos.map(function(currentTodo, i) {
        return <Todo todo={currentTodo} key={i} />;
    });
}
    render() {
        return (
            <div>
               <h3>Todo List</h3>
               <table className="table table-striped" style={{marginTop: 20}}>
               <thead>
                <tr>
                    <th>Description</th>
                    <th>Responsible</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>    
               </thead>
               <tbody>
                   { this.todosList() }
                   </tbody>
               </table>
                </div>
        )
    }
}