import React, { useState } from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/Layout'
import { Link } from "gatsby"
import {
  input,
  button,
  h3s
} from '../components/layout.module.css'

export default () => {

  const [name, setName] = useState('');
  const handleInput = event => {
    setName(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();

    navigate('/pokemon/');
  };
  
  return (
    <>
    <Layout pageTitle="Home Page">
    <form onSubmit={handleSubmit}>
          <input
            className={input}
            type="text"
            value={name}
            onChange={handleInput}            
          />
        <button
          className={button}
          type="submit"
          style={{            
            border: 'none',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 900,
            padding: '0.5rem 1rem'
          }}
        >
          Search
        </button>
      </form>
      <h3
      className={h3s}
      >
        Search above or <Link to="/pokemon/">CLICK HERE</Link>to see a list of all pokemon available in this pokedex!
      </h3>

    </Layout>
    </>
  )
}