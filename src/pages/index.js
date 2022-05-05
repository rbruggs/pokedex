import React, { useState } from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/Layout'
import Input from '../components/Input'
import PokemonGrid from '../components/PokemonGrid'
import usePokedex from '../hooks/usePokedex'

const IndexPage = () => {
  const [search, setSearch] = useState('')
  const pokedex = usePokedex()
  const handlePokemonClick = pokemon => navigate(pokemon.fields.slug)
  const handleSearchChange = event => setSearch(event.target.value)
  const byName = name => pokemon =>
    pokemon.name.toLowerCase().includes(name.toLowerCase())

  return (
    <Layout>
      <Input
        value={search}
        onChange={handleSearchChange}
      />
      <PokemonGrid
        pokemons={pokedex.filter(byName(search))}
        onPokemonClick={handlePokemonClick}
      />
    </Layout>
  )
}

export default IndexPage