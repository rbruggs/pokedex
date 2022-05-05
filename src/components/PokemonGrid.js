import React, { memo } from 'react'
import { css } from '@emotion/core'
import isEqual from 'lodash/fp/isEqual'
import PropTypes from 'prop-types'

import PokemonCard from './PokemonCard'

const styles = {
  grid: css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;

    @media (min-width: 400px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 800px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1000px) {
      grid-template-columns: repeat(5, 1fr);
    }
  `,
}

const PokemonGrid = ({ pokemons, onPokemonClick }) => {
  const handleClick = pokemon => () => onPokemonClick(pokemon)

  return (
    <>
      <div css={styles.grid}>
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.number}
            pokemon={pokemon}
            onClick={handleClick(pokemon)}
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
