import React from 'react'
import { storiesOf } from '@storybook/react'
import { PokemonList } from '../src/components/pokemonList/pokemonList'
import { PokemonListItem } from '../src/components/pokemonListItem/pokemonListItem'
import { PokemonType } from '../src/components/pokemonType/pokemonType'

import { PikachuMock } from './mocks.js'

storiesOf('PokemonList', module)
  .add('with no data', () => <PokemonList data={[]} />)
  .add('with 1 element', () => <PokemonList data={[PikachuMock]} />)

storiesOf('PokemonListItem', module).add('with Pikachu', () => <PokemonListItem data={PikachuMock} />)

storiesOf('PokemonType', module)
  .add('Electric', () => <PokemonType type="Electric" />)
  .add('Fire', () => <PokemonType type="Fire" />)
  .add('Poison', () => <PokemonType type="Poison" />)
  .add('Grass', () => <PokemonType type="Grass" />)
  .add('Flying', () => <PokemonType type="Flying" />)
  .add('Water', () => <PokemonType type="Water" />)
  .add('Bug', () => <PokemonType type="Bug" />)
  .add('Normal', () => <PokemonType type="Normal" />)
  .add('Ground', () => <PokemonType type="Ground" />)
  .add('Fairy', () => <PokemonType type="Fairy" />)
  .add('Fighting', () => <PokemonType type="Fighting" />)
  .add('Psychic', () => <PokemonType type="Psychic" />)
  .add('Dragon', () => <PokemonType type="Dragon" />)
  .add('Rock', () => <PokemonType type="Rock" />)
  .add('Steel', () => <PokemonType type="Steel" />)
  .add('Ice', () => <PokemonType type="Ice" />)
  .add('Ghost', () => <PokemonType type="Ghost" />)
