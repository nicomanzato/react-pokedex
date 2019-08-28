import React from 'react';
import { PokemonSummary } from '../pokemonSummary/pokemonSummary';
import './pokemonList.scss';

export const PokemonList = props => {
  return (
    <div className="pokemon-list">
      {props.data.map((pokemon, index) => (
        <PokemonSummary
          data={pokemon}
          onClick={() => props.onClick(pokemon)}
          key={index}
          className={'pokemon-list__item ' + props.classNameItem}
        />
      ))}
    </div>
  );
};
