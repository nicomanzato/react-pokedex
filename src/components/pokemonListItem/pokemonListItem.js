import React from 'react'
import './pokemonListItem.scss'

import { Image } from '../common/image/image'
import { PokemonType } from '../pokemonType/pokemonType'

export const PokemonListItem = ({ data, className }) => {
  return (
    <div className={'pokemonListItem__container ' + className}>
      <Image src={data.image} className="pokemonListItem__image" />
      <div className="pokemonListItem__header">
        <span className="pokemonListItem__pokemonNumber">#{data.number}</span>
        <span className="pokemonListItem__pokemonName">{data.name}</span>
      </div>
      <div className="pokemonListItem__typeContainer">
        {data.types &&
          data.types.map((type, index) => (
            <PokemonType type={type} key={index} className="pokemonListItem__pokemonType" />
          ))}
      </div>
    </div>
  )
}
