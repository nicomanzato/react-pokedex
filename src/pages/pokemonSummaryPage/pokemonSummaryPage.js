import React, { Component } from 'react'
import './pokemonSummaryPage.scss'
import { connect } from 'react-redux'

import { PokemonList } from '../../components/pokemonList/pokemonList'

import { requestGetPokemon } from '../../store/pokemon/pokemon.actions'

class PokemonSummaryPage extends Component {
  componentDidMount = () => {
    this.props.requestGetPokemon()
  }

  render() {
    return (
      <div className="pokemonSummaryPage__container">
        {this.props.isLoading && <>Now Loading ...</>}
        {!this.props.isLoading && (
          <div className="pokemonSummaryPage__pokemonListContainer">
            <PokemonList data={this.props.pokemon} />
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    isLoading: state.PokemonReducer.isLoading,
    pokemon: state.PokemonReducer.pokemon,
  }
}

const mapDispatchToProps = {
  requestGetPokemon: () => requestGetPokemon(),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonSummaryPage)
