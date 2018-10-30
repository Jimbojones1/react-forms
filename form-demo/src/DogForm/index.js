import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
// {Component} desctructering --> es6 desctruring
// Now we have Component in a variable, otherwise we would have to do
// React.Component

class Dog extends Component {
  constructor(){
    // calling super lets you use this inside constructor
    super();

    this.state = {
      name: '',
      age: '',
      breed: ''
    }
  }
  handleChange = (e) => {
    // e.target.value, e.target.name
      // arrow functions allow you to use 'this'
      // which you will have to for this.setState

      // computed properties, es6
      this.setState({[e.target.name]: e.target.value});

      // Same as
      // var someObject = {}
      // someObject[username] = e.target.username

  }
  handleSubmit = (e) => {
    // this will stop our form from submitting a request,
    // and refreshing the page
    e.preventDefault();

    // we are calling the login function that we created in
    // App.js, and we sent down as props in order to lift our state
    this.props.addDog(this.state);

  }
  render(){

    return (
      <div>
        <h4>Add Dog</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input type='text' name='name' onChange={this.handleChange} value={this.state.name} placeholder='name'/>
          <Form.Input type='text' name='age' onChange={this.handleChange} value={this.state.age} placeholder='age'/>
          <Form.Input type='text' name='breed' onChange={this.handleChange} value={this.state.breed} placeholder='breed'/>
          <Button type='submit' value='Submit' color="green">Add Dog</Button>
        </Form>
      </div>
      )
  }
};


export default Dog;
