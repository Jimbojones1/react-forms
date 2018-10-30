import React, { Component } from 'react';
// Whatever is called index.js in the Login folder,
// is the default file that is loaded
import Login from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  handleLogin = (username, isLoggedIn) => {
    console.log(username, isLoggedIn, ' in handleLogin');

    this.setState({
      username: username,
      logged: isLoggedIn
    });
  }
  render() {
    console.log(this.state)
    return (
      <div id="App">
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
