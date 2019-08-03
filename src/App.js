import React, { useEffect } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { requestGetPokemon } from './store/pokemon/pokemon.actions';

import { Footer } from './components/footer/footer';
import { Router } from './Router';

const App = ({ requestGetPokemon }) => {
  useEffect(() => {
    requestGetPokemon();
  }, [requestGetPokemon]);

  return (
    <React.StrictMode>
      <div className="app__container">
        <Router />
        <Footer />
      </div>
    </React.StrictMode>
  );
};

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = {
  requestGetPokemon: () => requestGetPokemon(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
