import React, { Component } from 'react';
import logo from './logo.svg';
// Whatever is called index.js in the Login folder,
// is the default file that is loaded
import Login from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
