import React from 'react'
import './App.scss'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import PokemonSummaryPage from './pages/pokemonSummaryPage/pokemonSummaryPage'

const client = new ApolloClient({
  uri: 'http://localhost:5000',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonSummaryPage />
    </ApolloProvider>
  )
}

export default App
