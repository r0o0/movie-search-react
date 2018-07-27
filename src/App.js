import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import { el } from './Assets/Helpers';
import SelectLang from './Components/Lang';
import MovieSearch from './Components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang : el('html').getAttribute('lang')
    };
    this.changeLang = this.changeLang.bind(this);
    console.log('app', this.changeLang, this.state);
  }
  changeLang(newLang) {
    this.setState({
      lang: newLang
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie Search React Appt</h1>
          <SelectLang onChange={this.changeLang} />
        </header>
        <MovieSearch lang={this.state.lang} />
      </div>
    );
  }
}

export default App;
