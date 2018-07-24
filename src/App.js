import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie Search React Appt</h1>
        </header>
      </div>
    );
  }
}

export default App;
