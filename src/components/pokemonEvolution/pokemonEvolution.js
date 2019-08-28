import React from 'react';
import './pokemonEvolution.scss';

import { Image } from '../common/image/image';

export const PokemonEvolution = ({ data, className }) => {
  return (
    <div className={'pokemon-evolution ' + className}>
      <Image src={data.image} className="pokemon-evolution__pokemon-image" />
      <div className="pokemon-evolution__pokemon-name">{data.name}</div>
    </div>
  );
};
