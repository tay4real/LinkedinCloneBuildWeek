import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';

class App extends React.Component {

  render(){
  return (
    <div className="App">
     <NavBar />
    </div>
  );
  }
}

export default App;
