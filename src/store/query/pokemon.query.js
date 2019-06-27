import { gql } from 'apollo-boost'

export const GET_POKEMON_LIST = gql`
  {
    pokemons(first: 151) {
      id
      name
      image
      types
      number
    }
  }
`
