import React, { Component } from 'react';
import { PokemonSummary } from '../pokemonSummary/pokemonSummary';
import './pokemonList.scss';
import classNames from 'classnames/bind';

export class PokemonList extends Component {
  render() {
    return (
      <div className="pokemonList__container">
        {this.props.data.map((pokemon, index) => (
          <PokemonSummary
            data={pokemon}
            onClick={() => this.props.onClick(pokemon)}
            key={index}
            className={classNames({
              pokemonList__item: true,
            })}
          />
        ))}
      </div>
    );
  }
}
