import React, { Component } from 'react'

function Field (props) {
  const {image, tag, name, types} = props
  return (
    <div>
      <img src={image}/>
      <h5>{tag} {name}</h5>
      {types.forEach((id, name) => {
        <span class={name}>{name}</span>
      })}
    </div>
  )
}

export default Field
