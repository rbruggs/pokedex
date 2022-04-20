
import * as React from 'react'
import "../App.css"
import { useState } from 'react';

function App(){
  const[pokemonName, setPokemonName] = useState("");
  return (
    <main>
      <div className="App">
        <div className="TitleSection">
          <h1>Pokemon Stats</h1>
          <input type="text" onChange={(event)=> {setPokemonName(event.target.value)}}/>
          <button>Search Pokedex</button>
        </div>
      </div>
    </main>
  )
}

export default App;