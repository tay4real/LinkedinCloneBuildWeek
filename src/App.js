import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProfileComponent from './components/ProfileComponent';


class App extends React.Component {

  render(){
  return (
    <div className="App">
      <Router>
        <NavBar />
         <Route path="/" exact component={ProfileComponent} />
         <Footer />
      </Router>

    </div>
  );
  }
}


export default App;