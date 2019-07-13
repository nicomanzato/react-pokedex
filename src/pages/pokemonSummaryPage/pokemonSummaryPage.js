import React, { Component } from 'react';
import './pokemonSummaryPage.scss';
import { connect } from 'react-redux';

import { PokemonList } from '../../components/pokemonList/pokemonList';
import { FilterForm } from '../../components/filterForm/filterForm';

import { requestGetPokemon } from '../../store/pokemon/pokemon.actions';

import { constants } from '../../constants';

class PokemonSummaryPage extends Component {
  componentDidMount = () => {
    this.props.requestGetPokemon();
  };

  handleOnPokemonItemClick = pokemon => {
    this.props.history.push(constants.ROUTES.pokemonDetailRoute + '/' + pokemon.name);
  };

  render() {
    return (
      <div className="pokemonSummaryPage__container">
        {this.props.isLoading && <>Now Loading ...</>}
        {!this.props.isLoading && (
          <>
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
              <PokemonList data={this.props.pokemon} onClick={this.handleOnPokemonItemClick} />
            </div>
          </>
        )}
      </div>
    );
  }
}

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
