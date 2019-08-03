import React from 'react';
import { PokemonSummary } from '../pokemonSummary/pokemonSummary';
import './pokemonList.scss';

export const PokemonList = props => {
  return (
    <div className="pokemonList__container">
      {props.data.map((pokemon, index) => (
        <PokemonSummary
          data={pokemon}
          onClick={() => props.onClick(pokemon)}
          key={index}
          className={'pokemonList__item ' + props.classNameItem}
        />
      ))}
    </div>
  );
};
