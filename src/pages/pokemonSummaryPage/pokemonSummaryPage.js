import React, { Component } from 'react'
import { Query } from 'react-apollo'

import { PokemonList } from '../../components/pokemonList/pokemonList'
import { GET_POKEMON_LIST } from '../../store/query/pokemon.query'

class PokemonSummaryPage extends Component {
  render() {
    return (
      <Query query={GET_POKEMON_LIST}>
        {({ loading, error, data }) => {
          if (loading) return <p>Now Loading ...</p>
          if (error) return <p>Error> :(</p>

          return <PokemonList data={data.pokemons} />
        }}
      </Query>
    )
  }
}

export default PokemonSummaryPage
