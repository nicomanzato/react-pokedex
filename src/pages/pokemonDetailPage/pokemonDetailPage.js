import React, { useEffect } from 'react';
import './pokemonDetailPage.scss';
import { connect } from 'react-redux';

import { Image } from '../../components/common/image/image';
import { LoadingIndicator } from '../../components/loadingIndicator/loadingIndicator';
import { PokemonType } from '../../components/pokemonType/pokemonType';
import { PokemonMove } from '../../components/pokemonMove/pokemonMove';
import { PokemonEvolution } from '../../components/pokemonEvolution/pokemonEvolution';
import { BackButton } from '../../components/backButton/backButton';

import { requestGetPokemonDetails } from '../../store/pokemon/pokemon.actions';

import { constants } from '../../constants';

const PokemonDetailPage = ({ history, isLoading, match, pokemon, requestGetPokemonDetails }) => {
  useEffect(() => {
    const pokemonName = match.params.pokemon;
    requestGetPokemonDetails(pokemonName);
  }, [match.params.pokemon, requestGetPokemonDetails]);

  const handleOnBackButtonClick = () => {
    history.push(constants.ROUTES.pokemonSummaryRoute);
  };

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {!isLoading && pokemon && (
        <section className="pokemon-details-page">
          <div className="pokemon-details-page__header">
            <div className="pokemon-details-page__pokemon-title-container">
              <div className="pokemon-details-page__pokemon-title">{pokemon.name}</div>
            </div>
          </div>
          <div className="pokemon-details-page__body">
            <div className="pokemon-details-page__pokemon-image-container pokemon-details-page__body-element">
              <Image src={pokemon.image} className="pokemon-details-page__pokemon-image" />
            </div>
            <div className="pokemon-details-page__pokemon-description pokemon-details-page__body-element">
              {pokemon.classification}
            </div>
            <div className="pokemon-details-page__pokemon-stats pokemon-details-page__body-element pokemon-details-page__small-body-element">
              <div className="pokemon-details-page__subheader">Stats</div>
              <hr />
              <div className="pokemon-details-page__subtitle">Pokemon Type</div>
              <div className="pokemon-details-page__pokemon-types">
                {pokemon.types &&
                  pokemon.types.map((type, index) => (
                    <PokemonType type={type} key={index} className="pokemon-details-page__pokemon-type" />
                  ))}
              </div>
              <div className="pokemon-details-page__pokemon-types-resistant">
                <div className="pokemon-details-page__subtitle">Strong against to</div>
                <div className="pokemon-details-page__pokemon-types">
                  {pokemon.resistant &&
                    pokemon.resistant.map((type, index) => (
                      <PokemonType type={type} key={index} className="pokemon-details-page__pokemon-type" />
                    ))}
                </div>
              </div>
              <div className="pokemon-details-page__pokemon-types-weaknesses">
                <div className="pokemon-details-page__subtitle">Weak against to</div>
                <div className="pokemon-details-page__pokemon-types">
                  {pokemon.weaknesses &&
                    pokemon.weaknesses.map((type, index) => (
                      <PokemonType type={type} key={index} className="pokemon-details-page__pokemon-type" />
                    ))}
                </div>
              </div>
            </div>
            <div className="pokemon-details-page__pokemonMoves pokemon-details-page__body-element pokemon-details-page__small-body-element">
              <div className="pokemon-details-page__subheader">Attacks</div>
              <hr />
              <div className="pokemon-details-page__subtitle pokemon-details-page__pokemon-move-subtitle">
                Fast Attacks
              </div>
              <div className="pokemon-details-page__pokemon-fast-attacks-container">
                {pokemon.attacks &&
                  pokemon.attacks.fast &&
                  pokemon.attacks.fast.map((attack, index) => (
                    <PokemonMove
                      data={attack}
                      className="pokemon-details-page__pokemon-move"
                      key={'pokemon-details-page__pokemon-move' + index}
                    />
                  ))}
              </div>
              <div className="pokemon-details-page__subtitle pokemon-details-page__pokemon-move-subtitle">
                Special Attacks
              </div>
              <div className="pokemon-details-page__pokemon-special-attacks-container">
                {pokemon.attacks &&
                  pokemon.attacks.special &&
                  pokemon.attacks.special.map((attack, index) => (
                    <PokemonMove
                      data={attack}
                      className="pokemon-details-page__pokemon-move"
                      key={'pokemon-details-page__pokemon-move' + index}
                    />
                  ))}
              </div>
            </div>
            <div className="pokemon-details-page__pokemon-evolutions pokemon-details-page__body-element pokemon-details-page__small-body-element">
              {pokemon.evolutions && (
                <>
                  <div className="pokemon-details-page__subheader">Evolution</div>
                  <hr />
                  {pokemon.evolutions.map((pokemon, index) => (
                    <PokemonEvolution
                      data={pokemon}
                      key={'pokemon-details-page__pokemon-evolution' + index}
                      className="pokemon-details-page__pokemon-evolution"
                    />
                  ))}
                </>
              )}
              {pokemon.evolutions === null && (
                <div className="pokemon-details-page__no-evolutions-available">No evolution available</div>
              )}
            </div>
          </div>
          <BackButton className="pokemon-details-page__back-button" onClick={handleOnBackButtonClick} />
        </section>
      )}
    </>
  );
};

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
