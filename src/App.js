import React from 'react'
import './App.scss'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import PokemonSummaryPage from './pages/pokemonSummaryPage/pokemonSummaryPage'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_GET_POKEMON,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonSummaryPage />
    </ApolloProvider>
  )
}

export default App
