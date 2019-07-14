import React from 'react';
import './pokemonType.scss';
import classNames from 'classnames/bind';
import { constants } from '../../constants';

export const PokemonType = ({ type, name, className }) => {
  const classes = {
    pokemonType__container: true,
    pokemonType__electricType: type === constants.POKEMON_TYPE.ELECTRIC,
    pokemonType__fireType: type === constants.POKEMON_TYPE.FIRE,
    pokemonType__poisonType: type === constants.POKEMON_TYPE.POISON,
    pokemonType__grassType: type === constants.POKEMON_TYPE.GRASS,
    pokemonType__flyingType: type === constants.POKEMON_TYPE.FLYING,
    pokemonType__waterType: type === constants.POKEMON_TYPE.WATER,
    pokemonType__bugType: type === constants.POKEMON_TYPE.BUG,
    pokemonType__normalType: type === constants.POKEMON_TYPE.NORMAL,
    pokemonType__groundType: type === constants.POKEMON_TYPE.GROUND,
    pokemonType__fairyType: type === constants.POKEMON_TYPE.FAIRY,
    pokemonType__fightingType: type === constants.POKEMON_TYPE.FIGHTING,
    pokemonType__psychicType: type === constants.POKEMON_TYPE.PSYCHIC,
    pokemonType__dragonType: type === constants.POKEMON_TYPE.DRAGON,
    pokemonType__rockType: type === constants.POKEMON_TYPE.ROCK,
    pokemonType__steelType: type === constants.POKEMON_TYPE.STEEL,
    pokemonType__iceType: type === constants.POKEMON_TYPE.ICE,
    pokemonType__ghostType: type === constants.POKEMON_TYPE.GHOST,
    pokemonType__darkType: type === constants.POKEMON_TYPE.DARK,
  };
  if (className) {
    classes[className] = true;
  }

  return <div className={classNames(classes)}>{name ? name : type}</div>;
};
