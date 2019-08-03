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
        <section className="pokemonSummaryPage__container">
          <div className="pokemonSummaryPage__header">
            <div className="pokemonSummaryPage__titleContainer">
              <div className="pokemonSummaryPage__title">Pokedex</div>
              <div className="pokemonSummaryPage__subtitle">
                A mini-encyclopedia of Pokémon species, types, evolutions, and moves.
              </div>
            </div>
            <div className="pokemonSummaryPage__searchContainer">
              <FilterForm />
            </div>
          </div>
          <div className="pokemonSummaryPage__pokemonListContainer">
            <PokemonList
              data={pokemon}
              classNameItem="pokemonSummaryPage__pokemonListItem"
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
