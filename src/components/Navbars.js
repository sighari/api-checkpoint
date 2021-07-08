import React, { Component } from "react";
import { Navbar,  Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Navbars extends Component {
  render() {
    return (
    
        <div>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand style={{fontWeight: "bold"}} as={Link} to={"/"}>Home</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
    
         
            
            
  
       
     
    );
  }
}
