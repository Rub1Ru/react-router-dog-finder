import React, { Component } from 'react'

export default class Tubby extends Component {
  render() {
    let data = this.props.data;
    return (
      <div>
        <h1>Tubby</h1>
        <h2>AHHHHFGHHHHHHHHHHHHHHHHHHHHHHHHHHH</h2>

        <img src={data.src} alt={data.name}/>
      </div>
    )
  }
}
