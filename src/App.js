import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from '@testing-library/react';

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todos-list.componets";

import logo from"./aa.png";



function App() {
  return (
    <Router> 
        <div className="container">

         <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com"/>
          </a>
          <Link to ="/" className="navbar-brand">MERN-Stack Todo App</Link> 
          <div className="">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
                </ul>
                </div>
           </nav>

         <Route path="/" exact component={TodoList} />
         <Route path="/edit/:id" Component={EditTodo} />
         <Route path="/create" component={CreateTodo} />  
         </div>
         

         </Router> 

    
    );
  }

export default App;
