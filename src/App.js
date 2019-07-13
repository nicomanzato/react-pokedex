import React from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'

import PokemonSummaryPage from './pages/pokemonSummaryPage/pokemonSummaryPage'

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <PokemonSummaryPage />
      </React.StrictMode>
    </Provider>
  )
}

export default App
