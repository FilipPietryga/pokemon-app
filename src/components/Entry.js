import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../styles/scss/types.scss'
import Type from './Type';
import { nanoid } from '@reduxjs/toolkit';

function Entry ({ img, tag, name, type }) {
  return (
    <div style={{width: "160px", maxWidth:"160px"}} 
      className='m-1 d-flex flex-column justify-content-center align-items-center border border-secondary rounded'>
      <img src={img} alt={name} className='FieldImage'/>
      <h5>{tag} {name}</h5>
      <div className='w-75 d-flex justify-content-around m-1'>
        {type.map((name) => (
          <Type key={nanoid()} name={name}/>
        ))}  
      </div>
    </div>
  )
}

export default Entry
