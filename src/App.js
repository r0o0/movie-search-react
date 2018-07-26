import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import { el } from './Assets/Helpers';
import SelectLang from './Components/Lang';
import SearchBar from './Components/Search';

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
          <SelectLang onChange={this.changeLang} />
        </header>
        <SearchBar lang={this.state.lang} />
      </div>
    );
  }
}

export default App;
