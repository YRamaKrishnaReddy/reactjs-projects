import React from 'react'

function FunctionComponent(props) {
  return (
    <div>
      <p>Function Component</p>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
    </div>
  )
}

export default FunctionComponent
