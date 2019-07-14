import { combineReducers } from 'redux';
import { PokemonReducer } from './pokemon/pokemon.reducer';

const AppReducer = combineReducers({
  PokemonReducer,
});

export default AppReducer;
