import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { constants } from './constants';

import PokemonSummaryPage from './pages/pokemonSummaryPage/pokemonSummaryPage';
import PokemonDetailPage from './pages/pokemonDetailPage/pokemonDetailPage';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Route exact path={constants.ROUTES.pokemonSummaryRoute} component={PokemonSummaryPage} />
          <Route path={constants.ROUTES.pokemonDetailRoute + '/:pokemon'} component={PokemonDetailPage} />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
