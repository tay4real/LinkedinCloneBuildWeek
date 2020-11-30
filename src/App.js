import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar';
import {Row, Col, Container,Image } from 'react-bootstrap';

import Category from './components/Category';

class App extends React.Component {

  render(){
  return (
    <div className="App">
     <NavBar />
     <Container>
        <Row className="pt-5">
          <Col md={8} ></Col>
          <Col md={4} >
            <Category title="People you may know" />
           
          </Col>
        </Row>
     </Container>
    </div>
  );
  }
}

export default App;
