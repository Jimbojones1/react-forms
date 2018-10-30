import React, { Component } from 'react';
import DogForm from '../DogForm';
import PuppyList from '../PuppyList';
import { Grid } from 'semantic-ui-react';


class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      puppies: []
    }
  }
  addDog = (puppy) => {
    // Either of the following ways of updating state work fine,
    // choose which one makes sense to you


    // One way to update state
    // const state = this.state;
    // state.puppies.push(puppy);
    // this.setState(state);

    // functional Way/ es6 way
    // using a spread operator
    this.setState({puppies: [...this.state.puppies, puppy]});
  }
  render(){
    return (
      <Grid container columns={3} textAlign='center' verticalAlign='top'>
        <Grid.Column style={{maxWidth: 450}}>
          <h4> Hi {this.props.username}</h4>
        </Grid.Column>
        <Grid.Column style={{maxWidth: 450}}>
          <DogForm addDog={this.addDog}/>
        </Grid.Column>
        <Grid.Column style={{maxWidth: 450}}>
          <PuppyList puppies={this.state.puppies} />
        </Grid.Column>
      </Grid>
      )
  }
}

export default MainContainer;
