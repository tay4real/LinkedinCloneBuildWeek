import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';


class App extends React.Component {

  render(){
  return (
    <div className="App">

      <Router>
      
      <Route path="/" exact component={Footer} />
   </Router>

     <NavBar />

    </div>
  );
  }
}

export default App;
