import { Link } from "gatsby"
import React, { useState } from 'react'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import {
  input,
  button,
  uList,
  card
} from '../components/layout.module.css'

export default function AllPokemon({ pageContext: { allPokemon } }) {

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

    <div>
      <ul className={uList}>
        {allPokemon.map(pokemon => (
          <li key={pokemon.id} className={card}>
          <Link to={`/pokemon/${pokemon.name}`}
          style={{
            fontSize: 20,
            color: `white`,
            textDecoration: `none`,
          }}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </Link>
            <h4>Type: {pokemon.types[0].type.name}</h4>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
    </>
  )
}



