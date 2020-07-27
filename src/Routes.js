import React, { Component } from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import Dog from "./Dog"
import DogDetails from "./DogDetails";

export default class Routes extends Component {
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <Switch>
        <Route exact path="/dogs" render={() => <Dog dogs={this.props.dogs} />} />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs"/>
      </Switch>
    )
  }
}
