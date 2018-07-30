import React, { Component } from 'react';
import { el } from './Assets/Helpers';
import SelectLang from './Components/Lang';
import MovieSearch from './Components/Search';
import NowPlaying from './Components/NowPlaying';

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
          <h1 className="App-title">Movie Search React Appt</h1>
          <SelectLang onChange={this.changeLang} />
        </header>
        <MovieSearch lang={this.state.lang} />
        <NowPlaying lang={this.state.lang}/>
      </div>
    );
  }
}

export default App;
