import React from 'react';
import './pokemonSummary.scss';

import { Image } from '../common/image/image';
import { PokemonType } from '../pokemonType/pokemonType';

export const PokemonSummary = ({ data, className, onClick }) => {
  return (
    <div className={'pokemonSummary__container ' + className} onClick={onClick}>
      <Image src={data.image} className="pokemonSummary__image" />
      <div className="pokemonSummary__header">
        <span className="pokemonSummary__pokemonNumber">#{data.number}</span>
        <span className="pokemonSummary__pokemonName">{data.name}</span>
      </div>
      <div className="pokemonSummary__typeContainer">
        {data.types &&
          data.types.map((type, index) => (
            <PokemonType type={type} key={index} className="pokemonSummary__pokemonType" />
          ))}
      </div>
    </div>
  );
};
