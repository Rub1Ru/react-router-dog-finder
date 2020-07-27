import React, { Component } from 'react'
import "./Dog.css"
import { Link } from "react-router-dom"
// // import Whiskey from "./Whiskey"
// // import Hazel from "./Hazel"
// import Tubby from "./Tubby"



export default class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>Click a Dog!</h1>
        {this.props.dogs.map(dog => (
          <Link key={dog.name} className="Dog-link" exact to={`/dogs/${dog.name}`}>
            <img src={dog.src} alt={dog.name}/>
            <h3>{dog.name}</h3>
          </Link>
        ))}
      </div>
    )
  }
}
