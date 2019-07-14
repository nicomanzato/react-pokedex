import React from 'react';
import './pokemonMove.scss';

import { PokemonType } from './../pokemonType/pokemonType';

export const PokemonMove = ({ data, className }) => {
  return (
    <div className={'pokemonMove__container ' + className}>
      <div className="pokemonMove__attackName">{data.name}</div>
      <div className="pokemonMove__attackDetailsContainer">
        <PokemonType type={data.type} className="pokemonMove__attackType" />
        <div className="pokemonMove__attackPower">{data.damage}</div>
      </div>
    </div>
  );
};
