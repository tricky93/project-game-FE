import React, { Component } from 'react';
import './App.css';
import Dialogue from './components/Dialogue/Dialogue';
import Wallet from './components/Wallet/Wallet';
import Bank from './components/Bank/Bank';
import Card from './components/Card/Card';
// Conditionaly render login screen or below
// show loggeddn user name

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Dialogue />
        <Wallet />
        <Bank />
        <Card />
      </div>
    );
  }
}

export default App;
