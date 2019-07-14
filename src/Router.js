import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { constants } from './constants';

import PokemonSummaryPage from './pages/pokemonSummaryPage/pokemonSummaryPage';
import PokemonDetailPage from './pages/pokemonDetailPage/pokemonDetailPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path={constants.ROUTES.pokemonSummaryRoute} component={PokemonSummaryPage} />
      <Route
        path={constants.ROUTES.pokemonDetailRoute + constants.ROUTES.pokemonDetailRouteParams}
        component={PokemonDetailPage}
      />
    </BrowserRouter>
  );
};
