import React from 'react';
import './pokemonType.scss';
import classNames from 'classnames/bind';
import { constants } from '../../constants';

export const PokemonType = ({ type, name, className }) => {
  const classes = {
    'pokemon-type': true,
    'pokemon-type__electric-type': type === constants.POKEMON_TYPE.ELECTRIC,
    'pokemon-type__fire-type': type === constants.POKEMON_TYPE.FIRE,
    'pokemon-type__poison-type': type === constants.POKEMON_TYPE.POISON,
    'pokemon-type__grass-type': type === constants.POKEMON_TYPE.GRASS,
    'pokemon-type__flying-type': type === constants.POKEMON_TYPE.FLYING,
    'pokemon-type__water-type': type === constants.POKEMON_TYPE.WATER,
    'pokemon-type__bug-type': type === constants.POKEMON_TYPE.BUG,
    'pokemon-type__normal-type': type === constants.POKEMON_TYPE.NORMAL,
    'pokemon-type__ground-type': type === constants.POKEMON_TYPE.GROUND,
    'pokemon-type__fairy-type': type === constants.POKEMON_TYPE.FAIRY,
    'pokemon-type__fighting-type': type === constants.POKEMON_TYPE.FIGHTING,
    'pokemon-type__psychic-type': type === constants.POKEMON_TYPE.PSYCHIC,
    'pokemon-type__dragon-type': type === constants.POKEMON_TYPE.DRAGON,
    'pokemon-type__rock-type': type === constants.POKEMON_TYPE.ROCK,
    'pokemon-type__steel-type': type === constants.POKEMON_TYPE.STEEL,
    'pokemon-type__ice-type': type === constants.POKEMON_TYPE.ICE,
    'pokemon-type__ghost-type': type === constants.POKEMON_TYPE.GHOST,
    'pokemon-type__dark-type': type === constants.POKEMON_TYPE.DARK,
  };
  if (className) {
    classes[className] = true;
  }

  return <div className={classNames(classes)}>{name ? name : type}</div>;
};
