import { graphql, useStaticQuery } from 'gatsby'

const usePokedex = () => {
  const data = useStaticQuery(graphql`
  query {
    allPokemons {
        nodes {
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
    } 
  `)

  return data.allPokemons.nodes
}

export default usePokedex