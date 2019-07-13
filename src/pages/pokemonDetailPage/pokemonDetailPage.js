import React, { Component } from 'react';
import './pokemonDetailPage.scss';
import { connect } from 'react-redux';

import { PokemonList } from '../../components/pokemonList/pokemonList';

import { requestGetPokemon } from '../../store/pokemon/pokemon.actions';

class PokemonDetailPage extends Component {
  render() {
    return <div className="pokemonDetailPage__container">asdasd</div>;
  }
}

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetailPage);
