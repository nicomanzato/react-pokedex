import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { requestGetPokemon } from './store/pokemon/pokemon.actions';

import { Footer } from './components/footer/footer';
import { Router } from './Router';

class App extends Component {
  componentDidMount = () => {
    this.props.requestGetPokemon();
  };

  render() {
    return (
      <React.StrictMode>
        <div className="app__container">
          <Router />
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
}

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
