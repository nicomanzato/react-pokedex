import React, { Component } from 'react'
import { PokemonListItem } from '../pokemonListItem/pokemonListItem'

export class PokemonList extends Component {
  render() {
    return (
      <>
        {this.props.data.map((pokemon, index) => (
          <PokemonListItem data={pokemon} key={index} />
        ))}
      </>
    )
  }
}
