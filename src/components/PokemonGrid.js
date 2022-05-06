import React, { memo } from 'react'
import PropTypes from 'prop-types'
import PokemonCard from './PokemonCard'
import { isEqual } from 'lodash';
import {
    grid,
  } from './layout.module.css'

const PokemonGrid = ({ pokemons, onPokemonClick }) => {
  //const handleClick = pokemon => () => onPokemonClick(pokemon)

  return (
    <>
      <div className={grid}>
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.national_number}
            pokemon={pokemon}
            //onClick={handleClick(pokemon)}
          />
        ))}
      </div>
    </>
  )
}

PokemonGrid.propTypes = {
  pokemons: PropTypes.array,
  onPokemonClick: PropTypes.func
}

const areEqual = (prevProps, nextProps) => isEqual(prevProps.pokemons, nextProps.pokemons)

export default memo(PokemonGrid, areEqual)
