import React, { Component } from 'react';
import { el } from './Assets/Helpers';
import Header from './Components/Header';
import MovieListSection from './Components/Movies';
import Footer from './Components/Footer';

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
        <Header lang={this.state.lang}/>
        <MovieListSection lang={this.state.lang} />
        <Footer />
      </div>
    );
  }
}

export default App;
