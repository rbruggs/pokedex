
import * as React from 'react'
import "../App.css"
import { useState } from 'react';

const IndexPage= () =>{

  const fetch = require("node-fetch")



  const[pokemonName, setPokemonName] = useState("");
  async function searchPokemon(){

    const pokemon = `${pokemonName.toLowerCase()}`;
    const { errors, data } = await fetchPokemon_details(pokemon)
    if (errors) {
      console.error(errors)
    }
    console.log(JSON.stringify(data, null, 2))
    console.log(pokemon)
    
  }
  return (
    <main>
      <div className="App">
        <div className="TitleSection">
          <h1>Pokemon Stats</h1>
          <input type="text" onChange={(event)=> {setPokemonName(event.target.value);}}/>
          <button onClick={searchPokemon}>Search Pokedex</button>
        </div>
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
          base_happiness
          is_legendary
          is_mythical
          generation: pokemon_v2_generation {
            name
          }
          habitat: pokemon_v2_pokemonhabitat {
            name
          }
          pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
            nodes {
              height
              name
              id
              weight
              abilities: pokemon_v2_pokemonabilities_aggregate {
                nodes {
                  ability: pokemon_v2_ability {
                    name
                  }
                }
              }
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
              levelUpMoves: pokemon_v2_pokemonmoves_aggregate(where: {pokemon_v2_movelearnmethod: {name: {_eq: "level-up"}}}, distinct_on: move_id) {
                nodes {
                  move: pokemon_v2_move {
                    name
                  }
                  level
                }
              }
              foundInAsManyPlaces: pokemon_v2_encounters_aggregate {
                aggregate {
                  count
                }
              }
              fireRedItems: pokemon_v2_pokemonitems(where: {pokemon_v2_version: {name: {_eq: "firered"}}}) {
                pokemon_v2_item {
                  name
                  cost
                }
                rarity
              }
            }
          }
          flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}, pokemon_v2_version: {name: {_eq: "firered"}}}) {
            flavor_text
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

export default IndexPage;