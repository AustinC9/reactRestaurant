import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import capmeme from "./capmeme.jpg";



class Header extends Component{

    // componentDidMount(){
    
    // }
    
    render(){
    
        return (
            <Jumbotron fluid>
      <Container>
        <img src={capmeme} alt='troll' />
      </Container>
    </Jumbotron>
    
            
        )
    }
    }
    
    export default Header 

