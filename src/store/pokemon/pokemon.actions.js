export const REQUEST_GET_POKEMON = '[POKEMON] REQUEST GET POKEMON'
export const SUCCESS_GET_POKEMON = '[POKEMON] SUCCESS GET POKEMON'
export const FAILURE_GET_POKEMON = '[POKEMON] FAILURE GET POKEMON'

export const requestGetPokemon = () => {
  return { type: REQUEST_GET_POKEMON }
}

export const successGetPokemon = payload => {
  return { type: SUCCESS_GET_POKEMON, payload }
}

export const failureGetPokemon = payload => {
  return { type: FAILURE_GET_POKEMON, payload }
}
