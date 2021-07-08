import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
const Details = ({match}) => {
const [details,setUserDetails]=useState({})
    useEffect(()=> {
        axios   
        .get(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`)  
        .then((res)=>{  
          setUserDetails(...res.data)
          console.log(res.data)
    
        })
        .catch((err)=>{ 
          console.log(err); 
    
        })  
        }, []);
    



    return (
        <div> 
             
            <h4>{details.username}</h4>
            <h4>{details.email}</h4>
            <p>{details.phone}</p>
            <p>{details.website}</p>
        </div>
    );
}

export default Details;
