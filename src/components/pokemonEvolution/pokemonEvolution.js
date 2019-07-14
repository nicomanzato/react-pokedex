import React from 'react';
import './pokemonEvolution.scss';

import { Image } from '../common/image/image';

export const PokemonEvolution = ({ data, className }) => {
  return (
    <div className={'pokemonEvolution__container ' + className}>
      <Image src={data.image} className="pokemonEvolution__pokemonImage" />
      <div className="pokemonEvolution__pokemonName">{data.name}</div>
    </div>
  );
};
