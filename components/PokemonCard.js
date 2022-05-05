import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import pad from 'lodash/fp/padCharsStart'

import PokemonType from './PokemonType'

const styles = {
  card: theme => css`
    position: relative;
    background-color: #3a3a3a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    border-radius: ${theme.borderRadius};
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.08);
  `,
  title: css`
    color: #ffffff;
    font-weight: bold;
    margin-top: 16px;
  `,
  number: css`
    color: rgba(255, 255, 255, 0.4);
    font-weight: bold;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: 0.8rem;
  `,
  image: css``,
  types: css`
    margin-top: .8rem;
    display: grid;
    grid-gap: .4rem;
    grid-auto-flow: column;
  `
}

const PokemonCard = ({ pokemon, ...props }) => {
  return (
    <div css={styles.card} {...props}>
      <div css={styles.image}>
        <Image fixed={pokemon.image.childImageSharp.fixed} />
      </div>
      <span css={styles.title}>{pokemon.name}</span>
      <span css={styles.number}>{pad('0', 3, pokemon.number)}</span>
      <div css={styles.types}>
        {pokemon.type.map((type, index) => (
          <PokemonType type={type} key={index} />
        ))}
      </div>
    </div>
  )
}

export default PokemonCard
