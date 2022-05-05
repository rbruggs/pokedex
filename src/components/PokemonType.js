import React from 'react'
import { css } from '@emotion/core'

const colorTypes = {
  bug: '#a8b81f',
  dragon: '#7138f8',
  electric: '#f8d02f',
  fairy: '#ee99ac',
  fighting: '#c03028',
  fire: '#f0802f',
  flying: '#a890f0',
  ghost: '#705898',
  grass: '#78c750',
  ground: '#e0bf68',
  ice: '#98d8d8',
  normal: '#a8a878',
  poison: '#a040a0',
  psychic: '#f85988',
  rock: '#b8a038',
  steel: '#b8b8cf',
  water: '#6890f0',
}

const getColorByType = type => colorTypes[type.toLowerCase()] || '#ffffff'

const styles = {
  type: type => theme => css`
    background-color: ${getColorByType(type)};
    border-radius: ${theme.borderRadius};
    font-size: .8rem;
    padding: .2rem .3rem;
    text-transform: lowercase;
    font-weight: bold;
    text-align: center;
  `
}

const PokemonType = ({ type, ...props }) => {
  return <div css={styles.type(type)} {...props}>{type}</div>
}

export default PokemonType