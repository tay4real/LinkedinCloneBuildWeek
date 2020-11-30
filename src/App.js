import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar';
import {Row, Col, Container } from 'react-bootstrap';
import SideCard from './components/SideCard';

class App extends React.Component {

  render(){
  return (
    <div className="App">
     <NavBar />
     <Container>
        <Row>
          <Col md={8} ></Col>
          <Col md={4} ><SideCard/></Col>
        </Row>
     </Container>
    </div>
  );
  }
}

export default App;
