import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Wallet from './components/Wallet/Wallet';
import Snippets from './components/Snippets/Snippets';
import Login from './components/Login/Login';
import Name from './components/Name/Name';
import Header from './components/Header/Header';
import store from './redux/index';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.id ? (
          <div className="container__login-id">
            <Header />
            <Login />
          </div>
        ) : !this.props.name ? (
          <div className="container__login-name">
            <Header />
            <Name />
          </div>
        ) : (
              <div className="app__game-container">
                <Display />
                <Snippets />
                <Wallet />
              </div>
            )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    id: store.playerMetaData.id,
    name: store.playerMetaData.name
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
