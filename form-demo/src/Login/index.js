import React, {Component} from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react';

class Login extends Component {
  constructor(){
    super();
    // super calls the Component class's constructor,
    // which allows us to use 'this'

    this.state = {
      username: '',
      password: ''
    }
  }
  handleInput = (e) => {
    // console.log(e.currentTarget.name, ' < --e.currentTarget.name', e.currentTarget.value, ' < --e.currentTarget.value');
    // arrow functions automatically bind this, which means we can use this
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });

    // // this is short hand for doing
    // const state = this.state;
    // state[e.currentTarget.name] = e.currentTarget.value;
    // const obj = {
    //   name: 'jim'
    // }

    // obj['name']
    // obj.name
    // this.setState(state)
  }
  handleSubmit = (e) => {
    // To stop the page from refreshing
    // We don't want to refresh cuz were making a SPA, (single page application)
    e.preventDefault();

    // this is the messanger function from the app component
    // that will allow us to LIFT UP STATE to the parent component
    this.props.handleLogin(this.state.username, true);
  }
  render(){
    console.log(this.props, ' props in Login Component')
    return (
        <Grid container columns={1} textAlign='center' verticalAlign='middle' style={{height: '100%'}}>
          <Grid.Column style={{maxWidth: 450}} >
            <Segment>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input fluid icon='user' iconPosition='left' type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder="username"/>
                <Form.Input fluid icon="lock" iconPosition="left" type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder="password"/>
                <Button color="green" fluid size="large" type="Submit">Login </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      )
  }
}

export default Login;
