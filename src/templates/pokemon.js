import React from "react"
import Pie from '../components/pie'
import { useDispatch } from 'react-redux'
import { pieDataUpdateAction } from '../redux/pieData/pieActions'
import { usePieData } from '../redux/pieData/usePieData'

export default function Pokemon({ pageContext: { pokemon } }) {

  const dispatch = useDispatch()
  const pieDataValues = usePieData()
  const pieDataUpdateActionFunction = pieDataUpdateAction
  return(
    <>
  

    <div>
      <ul>
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>Name: {pokemon.name}</h2>
            <h3>Main Type: {pokemon.types[0].type.name}</h3>
            <h3>Stats: </h3>
            <h4> HP : {pokemon.stats[0].base_stat}</h4>
            <h4> Attack: {pokemon.stats[1].base_stat}</h4>
            <h4> Defense: {pokemon.stats[2].base_stat}</h4>
            <h4> Sp Attack: {pokemon.stats[3].base_stat}</h4>
            <h4> Sp Defense : {pokemon.stats[4].base_stat}</h4>
            <h4> Speed: {pokemon.stats[5].base_stat}</h4>
          </li>
      </ul>
    </div>
    <button onClick={() => dispatch(pieDataUpdateActionFunction())}>
        Update Data
      </button>
      <Pie
        data={pieDataValues}
        width={400}
        height={400}
        innerRadius={100}
        outerRadius={200}
        cornerRadius={15}
      />   
  </>
  )
  
} 
