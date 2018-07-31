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
    this.getLang = this._getLang.bind(this);
  }
  _getLang(newLang) {
    this.setState({ lang: newLang });
  }
  render() {
    console.log('lang in app', this.state.lang)
    return (
      <div className="App">
        <Header onChange={this.getLang}/>
        <MovieListSection lang={this.state.lang} />
        <Footer />
      </div>
    );
  }
}

export default App;
