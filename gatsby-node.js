exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Pokemon`) {
      createNodeField({
        node,
        name: `slug`,
        value: `/pokemon/${node.national_number}-${node.name}/`
      })
    }
  }