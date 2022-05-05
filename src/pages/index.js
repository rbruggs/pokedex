
import * as React from 'react'
import "../App.css"
import { useState } from 'react';
import * as d3 from 'd3';

const IndexPage= () =>{

  const fetch = require("node-fetch")

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
  const[pokemonSearched, setPokemonSearched] = useState(false);


  async function searchPokemon(){  
    const pokemon = `${pokemonName.toLowerCase()}`;
    const { errors, data } = await fetchPokemon_details(pokemon)
    if (errors) {
      console.error(errors)
    }
    const lowName =  data.species[0].name;
    const capName = lowName.charAt(0).toUpperCase() + lowName.slice(1);

    setPokemonSearched(true);
    
    setPokemonData({name: capName,
      hp: data.species[0].pokemon.nodes[0].stats[0].base_stat,
      attack: data.species[0].pokemon.nodes[0].stats[1].base_stat,
      defense: data.species[0].pokemon.nodes[0].stats[2].base_stat,
      special_attack: data.species[0].pokemon.nodes[0].stats[3].base_stat,
      special_defense: data.species[0].pokemon.nodes[0].stats[4].base_stat,
      speed: data.species[0].pokemon.nodes[0].stats[5].base_stat,
      type: data.species[0].pokemon.nodes[0].types[0].type.name
    }) 
  }
  return (
    <main>
      <div className="App">
        <div className="TitleSection" >
          <h1>Pokemon Stats</h1>
          <input type="text" placeholder="Charmander" onChange={(event)=> {setPokemonName(event.target.value);}}/>
          <button onClick={searchPokemon}>Search Pokedex</button>
        </div>
      </div>
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

  async function fetchGraphQL(query, variables, operationName) {
    const result = await fetch(
      "https://beta.pokeapi.co/graphql/v1beta",
      {
        method: "POST",
        body: JSON.stringify({
          query: query,
          variables: variables,
          operationName: operationName
        })
      }
    )
  
    return await result.json()
  }


  function fetchPokemon_details(name) {
    const query = `
      query pokemon_details($name: String) {
        species: pokemon_v2_pokemonspecies(where: {name: {_eq: $name}}) {
          name
          generation: pokemon_v2_generation {
            name
          }
          pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
            nodes {
              height
              name
              id
              weight
              
              stats: pokemon_v2_pokemonstats {
                base_stat
                stat: pokemon_v2_stat {
                  name
                }
              }
              types: pokemon_v2_pokemontypes {
                slot
                type: pokemon_v2_type {
                  name
                }
              }
            }
          }
          flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}, pokemon_v2_version: {name: {_eq: "firered"}}}) {
            flavor_text
          }
          img: pokemon_v2_pokemonspecies(where: {pokemon_v2_pokemondexnumbers: {pokemon_v2_pokedex: {name: {_eq: "charmander"}}}}) {
            pokemon_v2_pokemons {
              pokemon_v2_pokemonsprites {
                sprites
              }
            }
          }
        }
      }
    `  

  
    return fetchGraphQL(
      query,
      {"name": name},
      "pokemon_details"
    )
    
  }


}

d3.select('h1').style('color', 'red')

export default IndexPage;