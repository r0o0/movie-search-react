import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

class App extends Component {

  componentDidMount() {
    const key = process.env.REACT_APP_TMDb_API_KEY;

    // get image url from TMDb API
    fetch(`//api.themoviedb.org/3/configuration?api_key=${key}`)
    .then(res => res.json())
    .then(data => console.log(data));
  }

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
