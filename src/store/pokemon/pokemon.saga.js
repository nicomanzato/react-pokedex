import { all, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_GET_POKEMON, successGetPokemon, failureGetPokemon } from './pokemon.actions'
import { getPokemon } from '../../services/pokemon.service'

export function* loadPokemon() {
  try {
    const { data } = yield getPokemon()
    yield put(successGetPokemon(data.pokemons))
  } catch (er) {
    console.log(er)
    yield put(failureGetPokemon(er))
  }
}

function* watchLoadPokemon() {
  yield takeLatest(REQUEST_GET_POKEMON, loadPokemon)
}

export function* pokemonSaga() {
  yield all([watchLoadPokemon()])
}
