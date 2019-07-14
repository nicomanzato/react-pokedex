import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_GET_POKEMON,
});

export const getPokemon = () => {
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
  `;

  return client.query({ query: GET_POKEMON_LIST });
};

export const getPokemonDetails = pokemon => {
  const GET_POKEMON_DETAILS = gql`
    {
      pokemon(name: "${pokemon}") {
        id
        number
        name
        image
        types
        classification
        resistant
        weaknesses
        attacks {
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
          }
        }
      }
    }
  `;
  return client.query({ query: GET_POKEMON_DETAILS });
};
