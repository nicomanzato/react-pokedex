import { all, put, takeLatest } from 'redux-saga/effects';

import {
  REQUEST_GET_POKEMON,
  REQUEST_GET_POKEMON_DETAILS,
  successGetPokemon,
  successGetPokemonDetails,
  failureGetPokemon,
  failureGetPokemonDetails,
} from './pokemon.actions';
import { getPokemon, getPokemonDetails } from '../../services/pokemon.service';

export function* loadPokemon() {
  try {
    const { data } = yield getPokemon();
    yield put(successGetPokemon(data.pokemons));
  } catch (er) {
    console.log(er);
    yield put(failureGetPokemon(er));
  }
}

function* watchLoadPokemon() {
  yield takeLatest(REQUEST_GET_POKEMON, loadPokemon);
}

export function* loadPokemonDetails(action) {
  try {
    const pokemonName = action.payload;
    const { data } = yield getPokemonDetails(pokemonName);
    yield put(successGetPokemonDetails(data.pokemon));
  } catch (er) {
    console.log(er);
    yield put(failureGetPokemonDetails(er));
  }
}

function* watchLoadPokemonDetails() {
  yield takeLatest(REQUEST_GET_POKEMON_DETAILS, loadPokemonDetails);
}

export function* pokemonSaga() {
  yield all([watchLoadPokemon(), watchLoadPokemonDetails()]);
}
