import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {
    card,
    pokemonTitle,
    pokemonNumber,
  } from './layout.module.css'


const PokemonCard = ({ pokemon, ...props }) => {
    return (
        <div className={card} {...props}>

            <span className={pokemonTitle}>{pokemon.name}</span>
            <span className={pokemonNumber}>{pokemon.national_number}</span>
        </div>
    )
}

export default PokemonCard
