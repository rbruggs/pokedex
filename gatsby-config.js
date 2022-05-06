module.exports = {
  pathPrefix:"/pokedex",
  siteMetadata: {
    title: "Pokedex",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    `gatsby-source-poke`,
    `gatsby-source-pokedex`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};