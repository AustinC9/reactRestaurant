import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap';


class Header extends Component{

// componentDidMount(){

// }

render(){

    return (
        <Jumbotron fluid>
  <Container>
    <h1>Look at Me </h1>
    <p>
      Address: 123 Captain Lane</p>
     <p> Phone Number: 867-5309</p>
      <p>Trolling: 24/7
    </p>
  </Container>
</Jumbotron>

        
    )
}
}

export default Header 












