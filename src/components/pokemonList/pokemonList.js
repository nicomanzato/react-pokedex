import React, { Component } from 'react'
import { PokemonListItem } from '../pokemonListItem/pokemonListItem'
import './pokemonList.scss'
import classNames from 'classnames/bind'

export class PokemonList extends Component {
  render() {
    return (
      <div className="pokemonList__container">
        {this.props.data.map((pokemon, index) => (
          <PokemonListItem
            data={pokemon}
            key={index}
            className={classNames({
              pokemonList__item: true,
            })}
          />
        ))}
      </div>
    )
  }
}
