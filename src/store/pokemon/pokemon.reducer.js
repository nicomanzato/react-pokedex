import { REQUEST_GET_POKEMON, SUCCESS_GET_POKEMON, FAILURE_GET_POKEMON } from './pokemon.actions'

const initialState = {
  isLoading: false,
  pokemon: [],
}

export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_POKEMON:
      return { ...state, isLoading: true }

    case SUCCESS_GET_POKEMON:
      const pokemonList = action.payload
      return { ...state, isLoading: false, pokemon: pokemonList }

    case FAILURE_GET_POKEMON:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
