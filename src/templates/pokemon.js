import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import PokemonType from '../components/PokemonType'

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  image: css`
    width: 100%;
    max-width: 300px;
    align-self: center;
  `,
  title: css`
    text-align: center;
    font-size: 3rem;
    margin-top: 2rem;
  `,
  types: css`
    display: flex;
    justify-content: center;
    & > * + * {
      margin-left: 8px;
    }
  `,
  stats: css`
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    & + & {
      margin-top: 8px;
    }
    span {
      flex: 1;
      &:first-of-type {
        margin-right: 8px;
        text-align: right;
      }
      &:last-of-type {
      }
    }
  `
}

export const query = graphql`
  query($number: Int!) {
    pokemon(number: { eq: $number }) {
      name
      type
      base {
        HP
        Attack
        Defense
        Sp__Attack
        Sp__Defense
        Speed
      }
      image {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const PokemonTemplate = ({ data }) => {
  const pokemon = data.pokemon
  return (
    <Layout>
      <div css={styles.container}>
        <div css={styles.image}>
          <Image fluid={pokemon.image.childImageSharp.fluid} />
        </div>
        <h1 css={styles.title}>{pokemon.name}</h1>
        <div css={styles.types}>
          {pokemon.type.map((type, index) => (
            <PokemonType type={type} key={index} style={{ fontSize: '1rem', padding: '.5rem .6rem' }} />
          ))}
        </div>
        <div css={styles.stats} style={{ marginTop: 32 }}>
          <span>HP: </span>
          <span>{pokemon.base['HP']}</span>
        </div>
        <div css={styles.stats}>
          <span>Attack: </span>
          <span>{pokemon.base['Attack']}</span>
        </div>
        <div css={styles.stats}>
          <span>Defense: </span>
          <span>{pokemon.base['Defense']}</span>
        </div>
        <div css={styles.stats}>
          <span>Sp. Attack: </span>
          <span>{pokemon.base['Sp__Attack']}</span>
        </div>
        <div css={styles.stats}>
          <span>Sp. Defense: </span>
          <span>{pokemon.base['Sp__Defense']}</span>
        </div>
        <div css={styles.stats}>
          <span>Speed: </span>
          <span>{pokemon.base['Speed']}</span>
        </div>
      </div>
    </Layout>
  )
}

export default PokemonTemplate
