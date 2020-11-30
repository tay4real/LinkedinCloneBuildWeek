import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from "./components/Footer";

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <Router>
      
      <Route path="/" exact component={Footer} />
   </Router>
    </div>
  );
  }
}

export default App;
