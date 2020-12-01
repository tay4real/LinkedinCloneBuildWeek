import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Experience from './components/Experience';
import Interests from './components/Interests';


class App extends React.Component {

  render(){
  return (
    <div className="App">

      <Router>
      <NavBar />
      <Route path="/" exact component={Experience} />
      <Route path="/" exact component={Interests} />
      <Route path="/" exact component={Footer} />
   
   </Router>

     

    </div>
  );
  }
}

export default App;
