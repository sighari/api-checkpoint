    import React, {useState, useEffect} from 'react';
    import axios from 'axios';
    import  Details from './components/Details.js'
    import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
    const UserList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(()=> {
    axios   
    .get("https://jsonplaceholder.typicode.com/users") 
    .then((res)=>{  
      setUserList(res.data)

    })
    .catch((err)=>{ 
      console.log(err); 

    })  
    }, []);

    return(

  <div>
    
      {userList.map(el=> <div><Link to={`/listUsers/${el.id}`}>{el.name}</Link><br/></div>)}
  </div>
    );

    };
    export default UserList;
