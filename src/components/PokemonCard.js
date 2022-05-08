import React from 'react'

import {
    card,
    pokemonTitle,
    pokemonNumber,
  } from './layout.module.css'


const PokemonCard = ({ pokemon, ...props }) => {
    return (
        <div className={card} {...props}>
            <img src={`${pokemon.sprites.normal}`} alt="" width="100"/>
            <span className={pokemonTitle}>{pokemon.name}</span>
            <span className={pokemonNumber}>{pokemon.national_number}</span>
        </div>
    )
}

export default PokemonCard
