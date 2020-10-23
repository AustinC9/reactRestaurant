import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap';


class Header extends Component{

// componentDidMount(){

// }

render(){

    return (
        <Jumbotron fluid>
  <Container>
    <h1></h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>

        
    )
}
}

export default Header 












