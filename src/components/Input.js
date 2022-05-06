import React from 'react'
import {
    input,
  } from './layout.module.css'

const Input = props => <input className={input} placeholder="Search Here" {...props} />

export default Input