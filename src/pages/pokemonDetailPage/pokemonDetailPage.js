import React, { Component } from 'react';
import './pokemonDetailPage.scss';
import { connect } from 'react-redux';

import { Image } from '../../components/common/image/image';
import { LoadingIndicator } from '../../components/loadingIndicator/loadingIndicator';
import { PokemonType } from '../../components/pokemonType/pokemonType';

import { requestGetPokemonDetails } from '../../store/pokemon/pokemon.actions';

class PokemonDetailPage extends Component {
  componentDidMount = () => {
    const pokemonName = this.props.match.params.pokemon;
    this.props.requestGetPokemonDetails(pokemonName);
  };

  render() {
    return (
      <>
        <section className="pokemonDetailsPage__container">
          {this.props.isLoading && <LoadingIndicator />}
          {!this.props.isLoading && this.props.pokemon && (
            <>
              <div className="pokemonDetailsPage__header">
                <div className="pokemonDetailsPage__pokemonTitleContainer">
                  <div className="pokemonDetailsPage__pokemonTitle">{this.props.pokemon.name}</div>
                </div>
              </div>
              <div className="pokemonDetailsPage__body">
                <div className="pokemonDetailsPage__pokemonImageContainer pokemonDetailsPage__bodyElement">
                  <Image src={this.props.pokemon.image} className="pokemonDetailsPage__pokemonImage" />
                </div>
                <div className="pokemonDetailsPage__pokemonDescription pokemonDetailsPage__bodyElement">
                  {this.props.pokemon.classification}
                </div>
                <div className="pokemonDetailsPage__pokemonStats pokemonDetailsPage__bodyElement pokemonDetailsPage__smallBodyElement">
                  <div className="pokemonDetailsPage__subtitle">Pokemon Type</div>
                  <div className="pokemonDetailsPage__pokemonTypes">
                    {this.props.pokemon.types &&
                      this.props.pokemon.types.map((type, index) => (
                        <PokemonType type={type} key={index} className="pokemonDetailsPage__pokemonType" />
                      ))}
                  </div>
                  <div className="pokemonDetailsPage__pokemonTypesResistant">
                    <div className="pokemonDetailsPage__subtitle">Strong against to</div>
                    <div className="pokemonDetailsPage__pokemonTypes">
                      {this.props.pokemon.resistant &&
                        this.props.pokemon.resistant.map((type, index) => (
                          <PokemonType type={type} key={index} className="pokemonDetailsPage__pokemonType" />
                        ))}
                    </div>
                  </div>
                  <div className="pokemonDetailsPage__pokemonTypesWeaknesses">
                    <div className="pokemonDetailsPage__subtitle">Weak against to</div>
                    <div className="pokemonDetailsPage__pokemonTypes">
                      {this.props.pokemon.weaknesses &&
                        this.props.pokemon.weaknesses.map((type, index) => (
                          <PokemonType type={type} key={index} className="pokemonDetailsPage__pokemonType" />
                        ))}
                    </div>
                  </div>
                </div>
                <div className="pokemonDetailsPage__pokemonMoves pokemonDetailsPage__bodyElement pokemonDetailsPage__smallBodyElement">
                  MOVES
                </div>
                <div className="pokemonDetailsPage__pokemonEvolutions pokemonDetailsPage__bodyElement pokemonDetailsPage__smallBodyElement">
                  EVOLUTION
                </div>
              </div>
            </>
          )}
        </section>
      </>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    isLoading: state.PokemonReducer.isLoadingPokemonDetails,
    pokemon: state.PokemonReducer.pokemonDetails,
  };
}

const mapDispatchToProps = {
  requestGetPokemonDetails: pokemonName => requestGetPokemonDetails(pokemonName),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetailPage);
