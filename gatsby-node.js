const pad = require('lodash/fp/padCharsStart')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Pokemon`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/pokemon/${pad('0', 3, node.number)}-${node.name}/`
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allPokemon {
        nodes {
          number
          fields {
            slug
          }
        }
      }
    }
  `)

  data.allPokemon.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { number: node.number }
    })
  })
}