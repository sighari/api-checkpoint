import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import Home from './components/Home'
import {Route} from "react-router-dom"
import UserList from './UserList';
import Details from './components/Details';
function App() {
  return (
    
    <div className="App">
        <Route   path="/" component={Navbars} />
        <Route  exact= {true} path="/" component={Home} />
        <Route exact path="/users" component={UserList} />
        <Route path="/listUsers/:id" component={Details} />

    </div>
  );
}

export default App;
