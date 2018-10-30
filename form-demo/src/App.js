import React, { Component } from 'react';
import logo from './logo.svg';
// Whatever is called index.js in the Login folder,
// is the default file that is loaded
import Login from './Login';
import MainContainer from './MainContainer';
import { Grid } from 'semantic-ui-react';
import './App.css';

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
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
            {this.state.logged ? <MainContainer username={this.state.username}/> : <Login handleLogin={this.handleLogin} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
