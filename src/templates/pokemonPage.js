import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import {
    container,
    img,
  } from '../components/layout.module.css'

export const query = graphql`
  query($national_number: String) {
    pokemons(national_number: { eq: $national_number }) {
        name
        national_number
        sp_atk
        sp_def
        speed
        hp
        defense
        attack
        sprites {
        normal
        large
        }    
    }
  }
`
const PokemonTemplate = ({ data }) => {
    const pokemons = data.pokemons
    return (
      <Layout>
        <div className={container}>
          <div >
            <img className={img} src={`${pokemons.sprites.large}`} alt={`${pokemons.name}`} width="500"/>
          </div>
          <h1 /*css={styles.title}*/>{pokemons.name}</h1>
          <div /*css={styles.stats} style={{ marginTop: 32 }}*/>
            <span>HP: </span>
            <span>{pokemons.hp}</span>
          </div>
          <div /*css={styles.stats}*/>
            <span>Attack: </span>
            <span>{pokemons.attack}</span>
          </div>
          <div /*css={styles.stats}*/>
            <span>Defense: </span>
            <span>{pokemons.defense}</span>
          </div>
          <div /*css={styles.stats}*/>
            <span>Sp. Attack: </span>
            <span>{pokemons.ap_atk}</span>
          </div>
          <div /* css={styles.stats}*/>
            <span>Sp. Defense: </span>
            <span>{pokemons.sp_def}</span>
          </div>
          <div /*css={styles.stats}*/>
            <span>Speed: </span>
            <span>{pokemons.speed}</span>
          </div>
        </div>
      </Layout>
    )
  }
  
  export default PokemonTemplate