import ApolloClient, { gql } from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_GET_POKEMON,
})

export function getPokemon() {
  const GET_POKEMON_LIST = gql`
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

  return client.query({ query: GET_POKEMON_LIST })
}
