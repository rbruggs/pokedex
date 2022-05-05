import { graphql, useStaticQuery } from 'gatsby'

const usePokedex = () => {
  const data = useStaticQuery(graphql`
    query {
      allPokemon {
        nodes {
          number
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
              fixed(width: 125, height: 125, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return data.allPokemon.nodes
}

export default usePokedex
