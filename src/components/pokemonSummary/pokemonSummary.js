import React from 'react';
import './pokemonSummary.scss';

import { Image } from '../common/image/image';
import { PokemonType } from '../pokemonType/pokemonType';

export const PokemonSummary = ({ data, className, onClick }) => {
  return (
    <div className={'pokemon-summary ' + className} onClick={onClick}>
      <Image src={data.image} className="pokemon-summary__image" />
      <div className="pokemon-summary__header">
        <span className="pokemon-summary__pokemon-number">#{data.number}</span>
        <span className="pokemon-summary__pokemon-name">{data.name}</span>
      </div>
      <div className="pokemon-summary__type-container">
        {data.types &&
          data.types.map((type, index) => (
            <PokemonType type={type} key={index} className="pokemon-summary__pokemon-type" />
          ))}
      </div>
    </div>
  );
};
