import React, { Component } from 'react'
import {withRouter, NavLink} from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {
  render() {
    let links = this.props.dogs.map(dog => {
      return <NavLink key={dog.name} activeClassName="NavBar-active" to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
    });
    return (
      <nav className="NavBar">
        <h1>Dog Shelter</h1>
        {links}
      </nav>
    )
  }
}

export default withRouter(NavBar);