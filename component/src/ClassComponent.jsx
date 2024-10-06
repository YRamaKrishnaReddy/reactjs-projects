import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
	      <p>Class Component</p>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
      </div>
    )
  }
}
