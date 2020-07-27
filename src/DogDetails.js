import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DogDetails extends Component {
  render() {
    let dog = this.props.dog;
    let facts = dog.facts.map(fact => {
       return <p>{fact}</p>
    })
    return (
      <div>
        <img src={dog.src} alt={dog.name}/>
        <h2>{dog.name}</h2>
        <h4>{dog.age} years old</h4>
        {facts}
        <Link to="/dogs">Go Back!</Link>
      </div>
    )
  }
}
