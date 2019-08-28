import React from 'react';
import './pokemonMove.scss';

import { PokemonType } from './../pokemonType/pokemonType';

export const PokemonMove = ({ data, className }) => {
  return (
    <div className={'pokemon-move__container ' + className}>
      <div className="pokemon-move__attack-name">{data.name}</div>
      <div className="pokemon-move__attack-details-container">
        <PokemonType type={data.type} className="pokemon-move__attack-type" />
        <div className="pokemon-move__attack-power">{data.damage}</div>
      </div>
    </div>
  );
};
