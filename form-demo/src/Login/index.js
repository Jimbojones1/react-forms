import React, {Component} from 'react';


class Login extends Component {
  render(){
    return (
      <form>
        <input type='text' name='username' placeholder="username"/>
        <input type='password' name='password' placeholder="password"/>
        <input type='submit' value="Login"/>
      </form>
      )
  }
}

export default Login;
