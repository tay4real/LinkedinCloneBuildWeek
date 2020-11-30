import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProfileComponent from './components/ProfileComponent';


class App extends React.Component {

  render(){
  return (
    <div className="App">

      <Router>
      <NavBar />
      <Container>
      <ProfileComponent/>
     </Container>
      <Route path="/" exact component={Footer} />
   </Router>


    </div>
  );
  }
}

export default App;
