const axios = require('axios');

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      return { ...pokemon};
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData([
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'pikachu',
    'abra',
    'kadabra',
    'alakazam',
    'slowpoke',
    'slowbro',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'hitmonlee',
    'hitmonchan',
    'tangela',
    'scyther',
    'electabuzz',
    'magmar',
    'magikarp',
    'gyarados',
    'lapras',
    'eevee',
    'vaporeon',
    'jolteon',
    'flareon',
    'porygon',
    'snorlax',
    'articuno',
    'zapdos',
    'moltres',
    'dratini',
    'dragonite',
    'mewtwo',
    'mew'

  ]);

  // Create a page that lists all Pokémon.
  createPage({
    path: `/pokemon`,
    component: require.resolve('./src/templates/all-pokemon.js'),
    context: { allPokemon }
  });

  // Create a page for each Pokémon.
  allPokemon.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { pokemon }
    });
  });
};
