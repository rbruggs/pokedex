exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Pokemons`) {
      createNodeField({
        node,
        name: `slug`,
        value: `/${node.name}/`
      })
    }
  }
  
  exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const { data } = await graphql(`
      query {
        allPokemons {
          nodes {
            name
            national_number
          }
        }
      }
    `)
  
    data.allPokemons.nodes.forEach(node => {
      createPage({
        path: node.name,
        component: require.resolve('./src/templates/pokemonPage.js'),
        context: { national_number: node.national_number }
      })
    })
  }