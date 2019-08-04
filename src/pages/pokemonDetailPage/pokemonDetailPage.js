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
        <section className="pokemonDetailsPage__container">
          <div className="pokemonDetailsPage__header">
            <div className="pokemonDetailsPage__pokemonTitleContainer">
              <div className="pokemonDetailsPage__pokemonTitle">{pokemon.name}</div>
            </div>
          </div>
          <div className="pokemonDetailsPage__body">
            <div className="pokemonDetailsPage__pokemonImageContainer pokemonDetailsPage__bodyElement">
              <Image src={pokemon.image} className="pokemonDetailsPage__pokemonImage" />
            </div>
            <div className="pokemonDetailsPage__pokemonDescription pokemonDetailsPage__bodyElement">
              {pokemon.classification}
            </div>
            <div className="pokemonDetailsPage__pokemonStats pokemonDetailsPage__bodyElement pokemonDetailsPage__smallBodyElement">
              <div className="pokemonDetailsPage__subheader">Stats</div>
              <hr />
              <div className="pokemonDetailsPage__subtitle">Pokemon Type</div>
              <div className="pokemonDetailsPage__pokemonTypes">
                {pokemon.types &&
                  pokemon.types.map((type, index) => (
                    <PokemonType type={type} key={index} className="pokemonDetailsPage__pokemonType" />
                  ))}
              </div>
              <div className="pokemonDetailsPage__pokemonTypesResistant">
                <div className="pokemonDetailsPage__subtitle">Strong against to</div>
                <div className="pokemonDetailsPage__pokemonTypes">
                  {pokemon.resistant &&
                    pokemon.resistant.map((type, index) => (
                      <PokemonType type={type} key={index} className="pokemonDetailsPage__pokemonType" />
                    ))}
                </div>
              </div>
              <div className="pokemonDetailsPage__pokemonTypesWeaknesses">
                <div className="pokemonDetailsPage__subtitle">Weak against to</div>
                <div className="pokemonDetailsPage__pokemonTypes">
                  {pokemon.weaknesses &&
                    pokemon.weaknesses.map((type, index) => (
                      <PokemonType type={type} key={index} className="pokemonDetailsPage__pokemonType" />
                    ))}
                </div>
              </div>
            </div>
            <div className="pokemonDetailsPage__pokemonMoves pokemonDetailsPage__bodyElement pokemonDetailsPage__smallBodyElement">
              <div className="pokemonDetailsPage__subheader">Attacks</div>
              <hr />
              <div className="pokemonDetailsPage__subtitle pokemonDetailsPage__pokemonMoveSubtitle">Fast Attacks</div>
              <div className="pokemonDetailsPage__pokemonFastAttacksContainer">
                {pokemon.attacks &&
                  pokemon.attacks.fast &&
                  pokemon.attacks.fast.map((attack, index) => (
                    <PokemonMove
                      data={attack}
                      className="pokemonDetailsPage__pokemonMove"
                      key={'pokemonDetailsPage__pokemonMove' + index}
                    />
                  ))}
              </div>
              <div className="pokemonDetailsPage__subtitle pokemonDetailsPage__pokemonMoveSubtitle">
                Special Attacks
              </div>
              <div className="pokemonDetailsPage__pokemonSpecialAttacksContainer">
                {pokemon.attacks &&
                  pokemon.attacks.special &&
                  pokemon.attacks.special.map((attack, index) => (
                    <PokemonMove
                      data={attack}
                      className="pokemonDetailsPage__pokemonMove"
                      key={'pokemonDetailsPage__pokemonMove' + index}
                    />
                  ))}
              </div>
            </div>
            <div className="pokemonDetailsPage__pokemonEvolutions pokemonDetailsPage__bodyElement pokemonDetailsPage__smallBodyElement">
              {pokemon.evolutions && (
                <>
                  <div className="pokemonDetailsPage__subheader">Evolution</div>
                  <hr />
                  {pokemon.evolutions.map((pokemon, index) => (
                    <PokemonEvolution
                      data={pokemon}
                      key={'pokemonDetailsPage__pokemonEvolution' + index}
                      className="pokemonDetailsPage__pokemonEvolution"
                    />
                  ))}
                </>
              )}
              {pokemon.evolutions === null && (
                <div className="pokemonDetailsPage__noEvolutionsAvailable">No evolution available</div>
              )}
            </div>
          </div>
          <BackButton className="pokemonDetailsPage__backButton" onClick={handleOnBackButtonClick} />
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
