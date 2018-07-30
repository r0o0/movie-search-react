import React, { Component } from 'react';
import { el } from './Assets/Helpers';
import './App.scss';
import SelectLang from './Components/Lang';
import MovieSearch from './Components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: el('html').getAttribute('lang')
    };
    this.changeLang = this._changeLang.bind(this);
  }
  _changeLang(newLang) {
    this.setState({
      lang: newLang
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title a11y-hidden">Movie Search React Appt</h1>
          <SelectLang onChange={this.changeLang} />
        </header>
        <MovieSearch lang={this.state.lang} />
      </div>
    );
  }
}

export default App;
