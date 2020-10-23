import React from "react";
import Menucall from "./Menucall";
import Appetizer from './Appetizer';
import Special from './Sotd';
import Sides from './Sides';
import Header from './Header'
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-theme.css';


function App(props) {
  return (
    <div className="App">
      <div className="container container-fluid">
    <Header />
      <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Special Of The Day
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><Special /></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Appetizers
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body><Appetizer /></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    Entrees
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body><Menucall /></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    Sides
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body><Sides /></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        
        {/* {props.menuItems} */}
      </div>
    </div>
  );
}

export default App;
