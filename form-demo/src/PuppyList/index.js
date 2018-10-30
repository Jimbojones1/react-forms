import React, { Component } from 'react';
import { List, Segment } from 'semantic-ui-react'
// {Component} desctructering --> es6 desctruring
// Now we have Component in a variable, otherwise we would have to do
// React.Component

class PuppyList extends Component {

  render(){

    const puppies = this.props.puppies.map((puppy, i) => {
      return <Segment key={i}><List.Item >Name: {puppy.name}, <br/> Breed: {puppy.breed}, <br/>Age: {puppy.age}</List.Item></Segment>
    })


    return (
      <div>
        <h4>Dogs</h4>
        <List>
          {puppies}
        </List>
      </div>
      )
  }
};


export default PuppyList;
