import React from 'react';
import './pokemonSummaryPage.scss';
import { connect } from 'react-redux';

import { PokemonList } from '../../components/pokemonList/pokemonList';
import { FilterForm } from '../../components/filterForm/filterForm';
import { LoadingIndicator } from '../../components/loadingIndicator/loadingIndicator';

import { requestGetPokemon } from '../../store/pokemon/pokemon.actions';

import { constants } from '../../constants';

const PokemonSummaryPage = ({ history, isLoading, pokemon }) => {
  const handleOnPokemonItemClick = pokemon => {
    history.push(constants.ROUTES.pokemonDetailRoute + '/' + pokemon.name);
  };

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {!isLoading && (
        <section className="pokemon-summary-page">
          <div className="pokemon-summary-page__header">
            <div className="pokemon-summary-page__title-container">
              <div className="pokemon-summary-page__title">Pokedex</div>
              <div className="pokemon-summary-page__subtitle">
                A mini-encyclopedia of Pokémon species, types, evolutions, and moves.
              </div>
            </div>
            <div className="pokemon-summary-page__search-container">
              <FilterForm />
            </div>
          </div>
          <div className="pokemon-summary-page__pokemon-list-container">
            <PokemonList
              data={pokemon}
              classNameItem="pokemon-summary-page__pokemon-list-item"
              onClick={handleOnPokemonItemClick}
            />
          </div>
        </section>
      )}
    </>
  );
};

function mapStateToProps(state, props) {
  return {
    isLoading: state.PokemonReducer.isLoading,
    pokemon: state.PokemonReducer.pokemon,
  };
}

const mapDispatchToProps = {
  requestGetPokemon: () => requestGetPokemon(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonSummaryPage);
