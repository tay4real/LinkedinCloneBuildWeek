import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Experience from './components/Experience';
import Interests from './components/Interests';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProfileComponent from './components/ProfileComponent';


class App extends React.Component {

  render(){
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ProfileComponent/>
          <Route path="/" exact component={Footer} />
      </Router>

    </div>
  );
  }
}

export default App;
