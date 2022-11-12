import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../scss/types.scss"

function Field (props) {
  const {img, tag, name, type} = props
  return (
    //refactor: reduce so many styles in one line ???
    <div style={{width: "160px"}} className="m-1 d-flex flex-column justify-content-center align-items-center border border-secondary rounded">
      <img src={img} alt={name} className="FieldImage"/>
      <h5>{tag} {name}</h5>
      <div className="w-75 d-flex justify-content-around">
        {type.map((name) => (
          <span className={name + " border rounded"} key={name.length}>{name}</span>
        ))} 
      </div>
    </div>
  )
}

export default Field
