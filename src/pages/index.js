
import * as React from 'react'
import "../App.css"
import { useState } from 'react';
import * as d3 from 'd3';
import Pie from '../components/pie'
import usePokedex from '../hooks/usePokedex'


const IndexPage= () =>{

  const pokedex = usePokedex()
  const [pokemonData, setPokemonData] = useState({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      special_attack: "",
      special_defense: "",
      speed: "",
      type: ""
  })
  const[pokemonName, setPokemonName] = useState("");
 
  return (
    <main>

      <div className="DisplaySection">
        { !pokemonSearched ? (
        <h1>Search for a Pokemon</h1>
        ):(
          <>
          <h1>{pokemonData.name}</h1>
          <h2>Type: {pokemonData.type}</h2>
          <h3>Hp: {pokemonData.hp}</h3>
          <h3>Attack: {pokemonData.attack}</h3>
          <h3>Defense: {pokemonData.defense}</h3>
          <h3>Special Attack: {pokemonData.special_attack}</h3>
          <h3>Special Defense: {pokemonData.special_defense}</h3>
          <h3>Speed: {pokemonData.speed}</h3>
          </>
        )
        }


      </div>
    </main>
  )  

}
  

export default IndexPage;