import { all } from 'redux-saga/effects';
import { pokemonSaga } from './pokemon/pokemon.saga';

export default function* appSagas() {
  yield all([pokemonSaga()]);
}
