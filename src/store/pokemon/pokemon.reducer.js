import {
  REQUEST_GET_POKEMON,
  SUCCESS_GET_POKEMON,
  FAILURE_GET_POKEMON,
  REQUEST_GET_POKEMON_DETAILS,
  SUCCESS_GET_POKEMON_DETAILS,
  FAILURE_GET_POKEMON_DETAILS,
} from './pokemon.actions';

const initialState = {
  isLoading: false,
  pokemon: [],

  isLoadingPokemonDetails: false,
  pokemonDetails: {},
};

export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_POKEMON:
      return { ...state, isLoading: true };

    case SUCCESS_GET_POKEMON:
      const pokemonList = action.payload;
      return { ...state, isLoading: false, pokemon: pokemonList };

    case FAILURE_GET_POKEMON:
      return { ...state, isLoading: false };

    case REQUEST_GET_POKEMON_DETAILS:
      return { ...state, isLoadingPokemonDetails: true };

    case SUCCESS_GET_POKEMON_DETAILS:
      const pokemonDetails = action.payload;
      return { ...state, isLoadingPokemonDetails: false, pokemonDetails };

    case FAILURE_GET_POKEMON_DETAILS:
      return { ...state, isLoadingPokemonDetails: false };

    default:
      return state;
  }
};
