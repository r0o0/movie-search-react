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
    this.getKeyword = this._getKeyword.bind(this);
  }
  _getLang(newLang) {
    this.setState({ lang: newLang });
  }
  _getKeyword(value) {
    // const newState = { lang: this.state.lang, keyword: value }; this.setState({
    // newState });
    this.setState({keyword: value});
  }
  render() {
    return (
      <div className="App">
        <Header onChange={this.getLang} onSubmit={this.getKeyword} />
        <MovieListSection lang={this.state.lang} keyword={this.state.keyword} />
        <Footer lang={this.state.lang}/>
      </div>
    );
  }
}

export default App;
